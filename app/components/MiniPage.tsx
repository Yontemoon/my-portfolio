import React from 'react';

const MiniPage = ({header}: {header: string}) => {
    return (
        <main className='flex items-end justify-center'>
            <div className="text-center p-4">
                {header}
            </div>
        </main>
    );
};

export default MiniPage;