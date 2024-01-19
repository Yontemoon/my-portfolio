import React from 'react';

const MiniPage = ({header}: {header: string}) => {
    return (
        <main className='flex items-end justify-center'>
            <h3 className="text-center p-4 text-white">
                {header}
            </h3>
        </main>
    );
};

export default MiniPage;