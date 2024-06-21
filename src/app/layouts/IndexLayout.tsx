import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogoWhite from "../../app/assets/logos/2.png"

const IndexLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header logo={LogoWhite} textColor='text-white' textColorMenu='#fff' />
            <main className='bg-black w-full h-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default IndexLayout;
