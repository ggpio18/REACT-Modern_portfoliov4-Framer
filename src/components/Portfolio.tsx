"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import project from '../assets/project.jpg';
import project1 from '../assets/proj1.jpg';



const projects = [
    {
        title: 'title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione enim itaque reprehenderit corrupti voluptas.',
        link: '#',
        git: '#',
        src: project1
    },
    {
        title: 'title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione enim itaque reprehenderit corrupti voluptas.',
        link: '#',
        git: '#',
        src: project1
    },
    {
        title: 'title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione enim itaque reprehenderit corrupti voluptas.',
        link: '#',
        git: '#',
        src: project1
    },
    {
        title: 'title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione enim itaque reprehenderit corrupti voluptas.',
        link: '#',
        git: '#',
        src: project1
    },
]
const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18' id="porfolio">

        <div className='max-w-[1200px] mx-auto space-y-24'>
            {projects.map((project, index) => (
                <motion.div
                key={index}
                initial={{opacity: 0, y: 75}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.25}}
                >
                    
                    <div></div>

                </motion.div>
            ))}
        </div>

    </div>
  )
}

export default Portfolio