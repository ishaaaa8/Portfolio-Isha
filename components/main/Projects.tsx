import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white py-20'>
                My Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10'>
                <ProjectCard
                    src='/1ss (1).png'
                    title='Jobsy'
                    description='A user-friendly platform designed to connect freelancers with clients while streamlining task management and payments. This web app allows users to post, edit, and delete tasks, handle payments securely via PayPal, and includes admin functionalities to approve or reject tasks.'
                />
                <ProjectCard
                    src='/3.png'
                    title='Chic Circle'
                    description='This project leverages advanced technologies like trend identification and community-based interaction, to enhance user engagement on the platform. The app allows users to post, like, and comment on outfits shared by their friends, join the communities of their interest and get inspiration from the latest trends.'
                />
                <ProjectCard
                    src='/1ss.png'
                    title='Student Performance Prediction'
                    description='This project uses machine learning to predict a students performance based on various attributes. The application is built using Flask for web development and incorporates a machine learning pipeline to predict the scores of students.'
                />
                <ProjectCard
                    src='/spamimg.jpg'
                    title='Spam Classification'
                    description='This project is focused on classifying emails into spam or ham categories using machine learning techniques.'
                />
                <ProjectCard
                    src='/mapimg.jpg'
                    title='Jaypee Maps'
                    description=''
                />
            </div>
        </div>
    );
};

export default Projects;
