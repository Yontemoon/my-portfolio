import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import arrow from "../icons/arrow-up-right.svg"
import bigArrow from "../icons/big-arrow-up-right.svg"
import { useState } from 'react';
import ArrowUpRight from '../icons/ArrowUpRight';

type PropTypes = {
    title: string
    project_description: string
    image: StaticImageData
    descriptors: string[]
    link_to_case: string
    link_to_site: string
}

const ProjectLink = ({title, project_description, descriptors, image, link_to_case, link_to_site}: PropTypes) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <main 
            className='flex w-3/4 justify-center p-4  m-5 cursor-pointer rounded hover:bg-opacity-30 hover:bg-gray-500 hover:shadow-2xl duration-700' 
            onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
            <div className='flex flex-col mr-2'>
                <div className='flex text-center items-center mb-2'>
                    <h2 className='mr-2'>{title}</h2>
                    {/* <div> */}
                        {!isHovered ? <ArrowUpRight width="25" height="25"color="white"/> : <ArrowUpRight width="35" height="35" color="white"/>}
                    {/* </div> */}
                </div>
                <div className='flex gap-2 mb-2'>
                    {descriptors.map((descriptor) => (
                        <div key={descriptor} className='border rounded-lg p-1'>
                            {descriptor}
                        </div>
                    ))}
                </div>
                <p className='mb-2'>
                    {project_description}
                </p>
                <div className='gap-2 flex'>
                    <Link href={link_to_case} className='border rounded p-1'>View Code</Link>
                    <Link href={link_to_site} className='border rounded p-1'>Link to Site</Link>
                </div>
            </div>
            <Link href="/test" className='w-96 h-40 overflow-hidden rounded'>
                <Image className='w-full h-full object-cover duration-75 hover:scale-110 hover:ease-in-out z-10' src={image} alt="image"/>
            </Link>
        </main>
    );
};

export default ProjectLink;