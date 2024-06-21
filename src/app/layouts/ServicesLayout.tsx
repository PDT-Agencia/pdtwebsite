import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogoWhite from "../assets/logos/2.png"

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
