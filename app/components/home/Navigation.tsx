import Link from 'next/link';
import React from 'react';

type Item = {
    link: string;
    label: string;
}

const Navigation = () => {
    const items: Item[] = [
        { link: "/", label: "Accueil" },
        { link: "/", label: "Voitures" },
    ];

    return (
        <nav className='border-b-2 border-b-orange-600 fixed w-full h-auto bg-orange-400 z-50  shadow-md py-1'>
            <div className='container mx-auto flex flex-row flex-wrap  justify-between w-full'>
                <div className='nav-table flex items-center bg-logo'>
                    <Link href="/" className="flex items-center justify-center space-x-4 nav-link">
                        <div className="text-left">
                            <span className="text-2xl italic font-bold text-blue-500">HIGH</span>
                            <span className="text-2xl italic font-bold text-red-500">-CAR</span>
                        </div>
                    </Link>
                </div>
                <div className='lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow'>
                        {items.map((item) => (
                            <Link key={item.link}
                                href={item.link}
                                className='nav-link border hover:underline border-white rounded block mt-4 lg:inline-block lg:mt-0 text-white mr-4 px-6 py-3 bg-transparent'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
