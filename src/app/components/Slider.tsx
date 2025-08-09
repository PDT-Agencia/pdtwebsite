import NextImage, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SvgArrowIcon } from '../svg/svgs';
import { usePathname } from 'next/navigation';

type SlideImage = {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
};

type Props = {
    images: SlideImage[];
    visible?: number;
    autoplayMs?: number;
    pauseOnHover?: boolean;
};

export default function Slider({
    images,
    visible = 4,
    autoplayMs = 2000,
    pauseOnHover = true
}: Props) {
    const pathname = usePathname();
    const isBlog = pathname === '/blog';

    const total = images.length;
    const V = Math.max(1, visible);

    const tripled = useMemo(
        () => (total ? [...images, ...images, ...images] : []),
        [images, total]
    );

    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [itemW, setItemW] = useState<number>(0);

    const [idx, setIdx] = useState(total);
    const [noTransition, setNoTransition] = useState(false);
    const [busy, setBusy] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!viewportRef.current) return;
        const ro = new ResizeObserver((entries) => {
            const w = entries[0].contentRect.width;
            setItemW(w / V);
        });
        ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, [V]);

    useEffect(() => {
        setIdx(total);
        setNoTransition(true);
        requestAnimationFrame(() => setNoTransition(false));
    }, [total]);

    const offsetPx = idx * itemW;

    const next = () => {
        if (!total || busy || itemW === 0) return;
        setBusy(true);
        setIdx((i) => i + 1);
    };

    const prev = () => {
        if (!total || busy || itemW === 0) return;
        setBusy(true);
        setIdx((i) => i - 1);
    };

    useEffect(() => {
        if (!total || !autoplayMs || autoplayMs <= 0 || paused) return;
        const id = setInterval(() => {
            if (!busy) setIdx((i) => i + 1);
        }, autoplayMs);
        return () => clearInterval(id);
    }, [autoplayMs, total, paused, busy]);

    const onEnd = () => {
        if (!total) return;

        if (idx >= total * 2) {
            setNoTransition(true);
            setIdx((i) => i - total);
            requestAnimationFrame(() => setNoTransition(false));
        } else if (idx < total) {
            setNoTransition(true);
            setIdx((i) => i + total);
            requestAnimationFrame(() => setNoTransition(false));
        }
        setBusy(false);
    };

    if (!total) return null;

    return (
        <div className="max-w-[1440px] w-full h-full">
            <div className={`relative ${isBlog ? 'flex' : 'flex items-center justify-between w-full'}`}>
                <button
                    className={`${isBlog ? 'absolute left-10 z-40 h-20' : ''} h-full px-5 p-2 rotate-180 hover:-translate-x-3 duration-500 transition-all ease hidden md:block`}
                    onClick={prev}
                    aria-label="Anterior"
                >
                    <SvgArrowIcon size={40} color={isBlog ? '#fff' : '#000'} />
                </button>

                <div
                    ref={viewportRef}
                    className={`${isBlog ? 'overflow-hidden' : 'relative w-full h-full overflow-hidden md:w-[75%]'}`}
                    onMouseEnter={() => pauseOnHover && setPaused(true)}
                    onMouseLeave={() => pauseOnHover && setPaused(false)}
                >
                    <div className={`absolute right-0 w-10 md:w-20 h-full bg-gradient-to-l from-white z-30 ${isBlog && 'hidden'}`} />
                    <div className={`absolute left-0  w-10 md:w-20 h-full bg-gradient-to-r from-white z-30 ${isBlog && 'hidden'}`} />

                    <div
                        ref={trackRef}
                        className="flex h-full w-fit will-change-transform"
                        onTransitionEnd={onEnd}
                        style={{
                            transform: `translateX(-${offsetPx}px)`,
                            transition: noTransition ? 'none' : 'transform 600ms ease-in-out'
                        }}
                    >
                        {tripled.map((img, i) => (
                            <div
                                key={`${img.alt}-${i}`}
                                className={`${isBlog ? 'h-[26rem]' : 'h-[10rem]'} flex items-center justify-center`}
                                style={{ width: itemW }}
                            >
                                <div className="px-5 w-full h-full flex items-center justify-center">
                                    <NextImage
                                        src={img.src}
                                        width={img.width}
                                        height={img.height}
                                        alt={img.alt}
                                        loading="lazy"
                                        sizes="(min-width: 768px) 25vw, 50vw"
                                        className={`${isBlog ? 'w-full h-full object-cover' : 'object-contain max-h-full'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={`${isBlog ? 'absolute right-10 top-0 z-40' : ''} h-full px-5 p-2 hover:translate-x-3 duration-500 transition-all ease hidden md:block`}
                    onClick={next}
                    aria-label="Siguiente"
                >
                    <SvgArrowIcon size={40} color={isBlog ? '#fff' : '#000'} />
                </button>
            </div>
        </div>
    );
}
