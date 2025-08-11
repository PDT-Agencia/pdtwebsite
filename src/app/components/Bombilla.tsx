import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import bombillaOn from "@/assets/images/home/bombilla_on.png";
import bombillaOff from "@/assets/images/home/bombilla_off.png";

export function Bulb({ className = '' }: { className?: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const VISIBLE_RATIO = 0.7;

        const io = new IntersectionObserver(
            ([entry]) =>
                setInView(entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO),
            { threshold: [0, 0.25, 0.5, 0.7, 0.9, 1] }
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <Image
                src={bombillaOff}
                alt="Bombilla apagada"
                priority={false}
                className="w-full h-auto select-none pointer-events-none"
            />

            <Image
                src={bombillaOn}
                alt="Bombilla encendida"
                priority={false}
                className={`absolute inset-0 w-full h-auto select-none pointer-events-none
          transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]
          ${inView ? 'opacity-100 animate-bulb-on' : 'opacity-0'}
        `}
            />

            <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-[2%] w-[65%] h-[10%] rounded-full blur-2xl
        ${inView ? 'opacity-40' : 'opacity-0'} transition-opacity duration-700`}
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,180,60,.6), transparent 70%)' }}
            />

            <style jsx>{`
        @keyframes bulb-on {
          0%   { opacity: 0; filter: brightness(1) drop-shadow(0 0 0 rgba(255,190,40,0)); }
          10%  { opacity: .75; filter: brightness(1.15) drop-shadow(0 0 12px rgba(255,190,40,.55)); }
          18%  { opacity: .35; filter: brightness(1); }
          28%  { opacity: .9;  filter: brightness(1.2) drop-shadow(0 0 16px rgba(255,190,40,.65)); }
          40%  { opacity: .6;  filter: brightness(1.05); }
          55%  { opacity: 1;   filter: brightness(1.25) drop-shadow(0 0 20px rgba(255,190,40,.75)); }
          100% { opacity: 1;   filter: brightness(1.18) drop-shadow(0 0 14px rgba(255,190,40,.6)); }
        }
        .animate-bulb-on { animation: bulb-on 900ms ease-out 1 both; }
      `}</style>
        </div>
    );
}
