import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SvgLogoPdt } from '../svg/svgs';

const ServicesLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header logo={<SvgLogoPdt size={100} />} textColor='text-white' textColorMenu='#fff' />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default ServicesLayout;
