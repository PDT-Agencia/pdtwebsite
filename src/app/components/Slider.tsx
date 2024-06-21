// components/Slider.js
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { SvgArrowIcon } from '../svg/svgs';
import { usePathname } from 'next/navigation';

interface Image {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
}
interface SliderImages {
    numberImage: number;
    images: Image[]
}

const Slider = ({ numberImage, images }: SliderImages) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;
    const pathname = usePathname();

    const slide = (direction: string) => {
        if (direction === 'next') {
            setCurrentIndex((currentIndex + numberImage) % totalImages);
        } else {
            setCurrentIndex((currentIndex - numberImage + totalImages) % totalImages);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            slide('next');
        }, 5000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    return (
        <div className={`max-w-[1440px] w-full h-full`}>
            <div className={`relative ${pathname === '/blog' ? 'flex' : 'flex items-center justify-between w-full' }`}>
                <button
                    className={`${pathname === '/blog' && 'absolute left-10 z-40 h-20'} h-full px-5 p-2 rotate-180 hover:-translate-x-3 duration-500 transition-all ease hidden md:block`}
                    onClick={() => slide('prev')}
                >
                    <SvgArrowIcon size={40} color={pathname === '/blog' ? '#fff' : '#000'} />
                </button>
                <div className={` ${pathname === '/blog' ? 'overflow-hidden' : 'relative w-full  h-full overflow-hidden md:w-[75%]'}`}>
                    <div className={`absolute right-0 w-10 md:w-20 h-full bg-gradient-to-l from-white z-30 ${pathname === '/blog' && 'hidden'}`}></div>
                    <div className={`absolute left-0 w-10 md:w-20 h-full bg-gradient-to-r from-white z-30 ${pathname === '/blog' && 'hidden'}`}></div>
                    <div
                        className={`flex gap-10 duration-1000 h-full w-full  transition-all ease`}
                        style={{ transform: `translateX(-${(currentIndex / totalImages) * 100}%)`, width: `${(totalImages / numberImage) * 100}%` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className={`${pathname === '/blog' ? 'w-[120rem] h-[26rem]' : 'w-full h-[10rem]'} flex items-center justify-center`}>
                                <Image src={image.src} width={image.width} height={image.height} alt={image.alt} loading='lazy' className={`${pathname === '/blog' ? 'w-full h-full object-cover' : 'object-cover'}`} />
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    className={`${pathname === '/blog' && 'absolute right-10 top-0 z-40'} h-full px-5 p-2 hover:translate-x-3 duration-500 transition-all ease hidden md:block`}
                    onClick={() => slide('next')}
                >
                    <SvgArrowIcon size={40} color={pathname === '/blog' ? '#fff' : '#000'} />
                </button>
            </div>
        </div>
    );
};

export default Slider;
