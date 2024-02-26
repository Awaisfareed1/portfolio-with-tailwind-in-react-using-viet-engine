import serviceImg1 from '../assets/images/ser1.png';
import serviceImg2 from '../assets/images/ser2.png';
import serviceImg3 from '../assets/images/ser3.png';
import serviceImg4 from '../assets/images/serblack.png';
import serviceImg5 from '../assets/images/serwhite.png';
import 'react-tabs/style/react-tabs.css';
const Services = () => {

    return (
        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] lg:w-[80%] xl:w-[60%] m-auto md:px-4'>
                <div className='text-center text-secondary'>
                    <h2 className='text-secondary font-anta text-[40px] font-[700] '>Our Services</h2>
                    <p>Lörem ipsum sugt rogt, ufoktiga såväl som wikiläcka reanede pregt.</p>
                </div>
                <div className="grid grid-cols-2 justify-between items-center my-0 md:my-10">
                    <div className="col-span-2 md:col-span-1">
                        <div className='w-full md:w-[80%] pt-10 md:pt-0'>
                            <ul>
                                <li className='flex justify-between items-center'></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div id="link1" className="block md:flex justify-center items-center gap-3">
                            <div className=''>
                                <img src={serviceImg1} alt="" />
                            </div>
                            <div className='flex flex-col gap-3 mt-3 md:mt-0'>
                                <div className='w-full h-[200px] md:w-[180px] md:h-[180px] bg-secondary rounded-3xl relative -z-10'>
                                    <img src={serviceImg2} className='absolute top-5 left-5' alt="" />
                                    <img src={serviceImg5} className='absolute bottom-3 right-3' alt="" />
                                    <div className='absolute left-4 bottom-4 w-20'>
                                        <p className='text-white'>See How We Work</p>
                                    </div>
                                </div>
                                <div className='w-full h-[200px] md:w-[180px] md:h-[180px] bg-primary rounded-3xl relative -z-10'>
                                    <img src={serviceImg3} className='absolute top-5 left-5' alt="" />
                                    <img src={serviceImg4} className='absolute bottom-3 right-3' alt="" />
                                    <div className='absolute left-4 bottom-4 w-20'>
                                        <p className='text-secondary'>Contact us for Query</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services