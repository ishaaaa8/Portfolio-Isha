import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
}

// const ProjectCard = ({ src, title, description }: Props) => {
//     return (
//         <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
//             <Image
//                 src={src}
//                 alt={title}
//                 width={1000}
//                 height={1000}
//                 className='w-full object-contain'
//             />
//             <div className='relative p-4'>
//                 <h1 className='text-2xl font-semibold text-white'>{title}</h1>
//                 <p className='mt-2 text-gray-300'>{description}</p>
//             </div>
//         </div>
        
//     )
// }
const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className='flex flex-col items-center gap-4 bg-gray-700 p-6 rounded-lg shadow-lg w-full min-w-[450px] opacity-95'>
            <Image
                src={src}
                alt={title}
                className='object-cover rounded-md w-full h-[200px] max-w-[350px]'
                width={350} // Add width
                height={200} // Add height
            />
            <h3 className='text-xl font-bold text-white'>{title}</h3>
            <p className='text-gray-300 text-sm'>{description}</p>
        </div>
    );
};



export default ProjectCard