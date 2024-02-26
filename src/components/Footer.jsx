import footerLogo from '../assets/images/logo2.png';
import blackArrow from '../assets/images/footerblackarrow.png';
import whiteArrow from '../assets/images/footerwhitearrow.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkein.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="w-full bg-secondary pt-[5%] pb-[5%]">
            <div className='w-[96%] md:w-[90%] m-auto md:px-4'>
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-4 md:col-span-4 lg:col-span-1">
                        <div className=' mx-4 md:mx-0 '>
                            <img src={footerLogo} className='' alt="" />
                            <p className='text-white  font-[300] my-5 text-justify'>Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybe</p>
                            <button className='flex justify-center items-center bg-primary text-secondary px-4 py-2 font-anta font-[500] rounded-xl'>
                                Get In Touch <span className='ml-4'><img src={blackArrow} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1 lg:col-span-1">
                        <div className="flex justify-start mx-4 md:mx-0 md:justify-center items-start md:items-center">
                            <div>
                                <h2 className='text-lg font-anta text-white tracking-widest flex items-center'>Services <img className='ml-4 w-5 h-5' src={whiteArrow} alt="" /></h2>
                                <ul className='my-4 text-white space-y-3'>
                                    <li><Link to="/">Web Development</Link></li>
                                    <li><Link to="/">App Development</Link></li>
                                    <li><Link to="/">Branding</Link></li>
                                    <li><Link to="/">E-commerece</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-span-1">
                        <div className="flex justify-start mx-4 md:mx-0 md:justify-center items-start md:items-center">
                            <div>
                                <h2 className='text-lg font-anta text-white tracking-widest flex items-start md:items-center'>Company <img className='ml-4 w-5 h-5' src={whiteArrow} alt="" /></h2>
                                <ul className='my-4 text-white space-y-3'>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/">Privacy Plicy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1 lg:col-span-1">
                        <div className="lg:flex justify-center items-start">
                            <div className='mx-4 md:mx-0'>
                                <h2 className='text-lg font-anta text-white tracking-widest '>Follow Us</h2>
                                <div className='flex justify-between items-center my-8'>
                                    <img src={linkedin} alt="" />
                                    <img className='mx-4' src={facebook} alt="" />
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;