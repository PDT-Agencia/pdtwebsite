import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header logo="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242215/logo_zx0gmc.png" textColor='text-white' textColorMenu='#fff' />
            <main className='bg-black w-full h-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default IndexLayout;
