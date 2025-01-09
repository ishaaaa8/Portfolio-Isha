"use client"

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const Encryption = () => {
    return (
        <div className='relative flex flex-col items-center top-[-150px] justify-center min-h-screen bg-gradient-to-b'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white py-40'>
                Education
            </h1>
            <div className='w-full flex justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-3/5 py-5 '>
                    <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold text-white'>B.Tech in Computer Science</h2>
                        <p className='text-gray-300'>Jaypee Institute of Information Technology</p>
                        <p className='text-sm text-gray-400'>2022 - 2026</p>
                        <ul className='list-disc pl-5 mt-2 text-gray-400'>
                            <li>CGPA: 8.7/10</li>
                            <li>Computer Science and Engineering</li>
                            
                        </ul>
                    </div>
                    <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold text-white'>St. Mary&apos;s Convent Sr. Sec. School</h2>
                        {/* <p className='text-gray-300'>Class 10</p>
                        <p className='text-sm text-gray-400'>2019 - 2021</p> */}
                        <ul className='list-disc pl-5 mt-2 text-gray-400'>
                            <li>Class 10</li>
                            <li>2020</li>
                            <li>Percentage: 98.2%</li>
                        </ul>
                        <ul className='list-disc pl-5 mt-2 text-gray-400'>
                            <li>Class 12</li>
                            <li>2022</li>
                            <li>Percentage: 97.6%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Encryption