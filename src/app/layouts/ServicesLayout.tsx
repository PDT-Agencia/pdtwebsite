import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const LogoWhite = "https://pdt-website-videos.vercel.app/_next/static/media/2.2e589d59.png"

const ServicesLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header logo={LogoWhite} textColor='text-white' textColorMenu='#fff' />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default ServicesLayout;
