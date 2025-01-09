import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full h-[55px] fixed top-0 shadow-lg shadow-[rgba(255,102,0,0.3)] bg-gradient-to-r from-[#141414] via-[#252525] to-[#2e2e2e] backdrop-blur-[8px] z-50 px-10 opacity-90'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a
                    href='#about-me'
                    className='h-auto w-auto flex flex-row items-center'
                >
                    <Image
                        src='/NavLogo.png'
                        alt='logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                    <span className='font-bold ml-[8px] hidden md:block text-gray-300'>
                        Isha Singh
                    </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[rgba(255,102,0,0.5)] bg-[rgba(10,10,10,0.6)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer hover:text-orange-700'>
                            About me
                        </a>
                        <a href='#skills' className='cursor-pointer hover:text-orange-700'>
                            Skills
                        </a>
                        <a href='#projects' className='cursor-pointer hover:text-orange-700'>
                            Projects
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    {Socials.map((social, index) => (
                    <a 
                        key={index} // Add key prop here
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="hover:opacity-80"
                        />
                    </a>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
