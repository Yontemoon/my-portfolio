import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-center p-4'>
            <Link href="/">Home</Link>
            <Link href="/projects">Project</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
};

export default Navbar;