import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const topOffset = 50;
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= topOffset) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div className='fixed top-0 w-full z-50'>
            <nav className={scrolled ? "navbar1" : "navbar2"}>
                <div className="w-[96%] md:w-[90%] m-auto md:px-4 flex flex-wrap md:flex-wrap-reverse items-center justify-between">
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 },
                            delay: 0.2
                        }}
                        className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start py-4 md:py-0 px-3 md:px-0">
                        <Link className="text-sm font-bold leading-relaxed inline-block md:mr-4 md:py-2 whitespace-nowrap uppercase text-white"
                            to='/'>
                            <img src={logo} alt="" /></Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </motion.div>
                    <div className={"md:flex flex-grow md:flex-grow-0 items-center w-full md:w-auto bg-primary md:bg-transparent" + (navbarOpen ? " flex" : " hidden")}>
                        <ul className="flex flex-col md:flex-row list-none md:ml-auto md:space-x-16 w-full md:w-auto">
                            <li className="nav-item mx-4 md:mx-0 border-b-2 border-t-2 border-secondary">
                                <Link className="flex items-center text-lg leading-snug text-secondary md:text-white hover:opacity-75 py-2 md:py-0 "
                                    to='/'>Home
                                </Link>
                            </li>
                            <li className="nav-item mx-4 md:mx-0 border-b-2 border-secondary">
                                <Link className="flex items-center text-lg leading-snug text-secondary md:text-white hover:opacity-75 py-2 md:py-0 "
                                    to='/' >Services
                                </Link>
                            </li>
                            <li className="nav-item mx-4 md:mx-0 border-b-2 border-secondary">
                                <Link className="flex items-center text-lg leading-snug text-secondary md:text-white hover:opacity-75 py-2 md:py-0 "
                                    to='/'>Blog
                                </Link>
                            </li>
                            <li className="nav-item mx-4 md:mx-0 border-b-2 border-secondary">
                                <Link className="flex items-center text-lg leading-snug text-secondary md:text-white hover:opacity-75 py-2 md:py-0 "
                                    to='/'>About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <button className='bg-primary text-secondary px-4 py-2 rounded-lg'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

