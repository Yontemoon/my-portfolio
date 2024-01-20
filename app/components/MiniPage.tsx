import React from 'react';
import Image from 'next/image';

const MiniPage = ({header, icon}: 
    {header: string,
    icon: any}
) => {
    return (
        <main className='flex items-end justify-center fade-animation'>
            <div className='flex flex-col items-center mb-8'>
                <Image src={icon} alt="icon"/>
                <h2 className="text-center p-4 text-white ">
                    {header}
                </h2>
            </div>
        </main>
    );
};

export default MiniPage;