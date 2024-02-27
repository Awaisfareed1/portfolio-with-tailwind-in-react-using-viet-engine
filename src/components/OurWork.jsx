import workbg from '../assets/images/workbg.png';
import work1 from '../assets/images/work1.png';
import work2 from '../assets/images/work2.png';
import work3 from '../assets/images/work3.png';
import work4 from '../assets/images/work4.png';
import work5 from '../assets/images/work5.png';

const OurWork = () => {
    return (
        <motion.div 
            className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] lg:w-[80%] xl:w-[60%] m-auto md:px-4'>
                <div className='text-center text-secondary'>
                    <h2 className='text-secondary font-anta text-[40px] font-[700] '>how we works</h2>
                    <p>Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel. </p>
                </div>
                <div className='my-10'>
                    <div className="flex flex-col-reverse justify-center md:flex md:flex-row items-center my-5">
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='flex justify-center items-center relative -z-10'>
                                <img src={workbg} alt="" />
                                <img src={work1} className='absolute' alt="" />
                            </div>
                        </div>
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='my-5 md:my-0 w-full md:w-[50%] mr-0 ml-0 md:ml-10 md:mr-10'>
                                <h1 className='text-secondary opacity-15 text-[35px] font-anta font-[600]'>01</h1>
                                <h2 className='text-secondary text-[20px] font-[500]'>Planning and Analysis</h2>
                                <p className='font-light'>Lörem ipsum ananing diskade hypobira faca håhet snålsurfa när sagn, tetrakap i klsäkra, kisam dibårat samt heteror</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:flex md:flex-row items-center my-5">
                        <div className="my-5 md:my-0 w-full md:w-[50%] text-end mr-0 ml-0 md:ml-10 md:mr-10">
                            <div className='w-full md:w-[70%]'>
                                <h1 className='text-secondary opacity-15 text-[35px] font-anta font-[600]'>02</h1>
                                <h2 className='text-secondary text-[20px] font-[500]'>Design</h2>
                                <p className='font-light'>Lörem ipsum ananing diskade hypobira faca håhet snålsurfa när sagn, tetrakap i klsäkra, kisam dibårat samt heteror</p>
                            </div>
                        </div>
                        <div className="my-5 md:my-0 w-full md:w-[50%] d-flex justify-end">
                            <div className='flex justify-center md:justify-start items-center relative -z-10'>
                                <img src={workbg} alt="" />
                                <img src={work2} className='absolute' alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col-reverse justify-center md:flex md:flex-row items-center my-5">
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='flex justify-center items-center relative -z-10'>
                                <img src={workbg} alt="" />
                                <img src={work3} className='absolute' alt="" />
                            </div>
                        </div>
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='my-5 md:my-0 w-full md:w-[50%] mr-0 ml-0 md:ml-10 md:mr-10'>
                                <h1 className='text-secondary opacity-15 text-[35px] font-anta font-[600]'>03</h1>
                                <h2 className='text-secondary text-[20px] font-[500]'>Development</h2>
                                <p className='font-light'>Lörem ipsum ananing diskade hypobira faca håhet snålsurfa när sagn, tetrakap i klsäkra, kisam dibårat samt heteror</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:flex md:flex-row items-center my-5">
                        <div className="my-5 md:my-0 w-full md:w-[50%] text-end mr-0 ml-0 md:ml-10 md:mr-10">
                            <div className='w-full md:w-[70%]'>
                                <h1 className='text-secondary opacity-15 text-[35px] font-anta font-[600]'>04</h1>
                                <h2 className='text-secondary text-[20px] font-[500]'>Testing and Modification</h2>
                                <p className='font-light'>Lörem ipsum ananing diskade hypobira faca håhet snålsurfa när sagn, tetrakap i klsäkra, kisam dibårat samt heteror</p>
                            </div>
                        </div>
                        <div className="my-5 md:my-0 w-full md:w-[50%] d-flex justify-end">
                            <div className='flex justify-center md:justify-start items-center relative -z-10'>
                                <img src={workbg} alt="" />
                                <img src={work4} className='absolute' alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col-reverse justify-center md:flex md:flex-row items-center my-5">
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='flex justify-center items-center relative -z-10'>
                                <img src={workbg} alt="" />
                                <img src={work5} className='absolute' alt="" />
                            </div>
                        </div>
                        <div className="my-5 md:my-0 w-full md:w-[50%]">
                            <div className='my-5 md:my-0 w-full md:w-[50%] mr-0 ml-0 md:ml-10 md:mr-10'>
                                <h1 className='text-secondary opacity-15 text-[35px] font-anta font-[600]'>05</h1>
                                <h2 className='text-secondary text-[20px] font-[500]'>Delivery</h2>
                                <p className='font-light'>Lörem ipsum ananing diskade hypobira faca håhet snålsurfa när sagn, tetrakap i klsäkra, kisam dibårat samt heteror</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OurWork
