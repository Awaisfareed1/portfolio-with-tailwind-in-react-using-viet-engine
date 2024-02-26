import chooseimg from '../assets/images/chooseus1.png';
import chooselogo from '../assets/images/chooseus2.png';
import tickIcon from '../assets/images/tick.png';
const Choose = () => {
    return (
        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] m-auto md:px-4'>
                <div className="grid grid-cols-4">
                    <div className='col-span-4 md:col-span-4 lg:col-span-2 flex items-center'>
                        <div>
                            <div className='md:w-[80%]'>
                                <h2 className='text-secondary font-anta text-[40px] font-[700] '>Why Choose us</h2>
                                <p className='my-3'>Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagn, tetrakap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel. t heteror vide, jons plan biism monokrokybel. </p>
                            </div>
                            <div>
                                <div className='flex justify-start items-center my-2'>
                                    <img src={tickIcon} className='w-5 h-5' alt="" />
                                    <span className='mx-2'>Lörem ipsum ananing diskade hypobira facebooka</span>
                                </div>
                                <div className='flex justify-start items-center my-2'>
                                    <img src={tickIcon} className='w-5 h-5' alt="" />
                                    <span className='mx-2'>när sagon, tetraguskap i klimatsäkra, kisa</span>
                                </div>
                                <div className='flex justify-start items-center my-2'>
                                    <img src={tickIcon} className='w-5 h-5' alt="" />
                                    <span className='mx-2'>Lörem ipsum ananing diskade hypobira facebooka håhet</span>
                                </div>
                                <div className='flex justify-start items-center my-2'>
                                    <img src={tickIcon} className='w-5 h-5' alt="" />
                                    <span className='mx-2'>snålsurfa när sagon, tetraguskap i klimatsäkra, kisam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 md:col-span-4 lg:col-span-2 relative flex justify-end -z-10'>
                        <img src={chooseimg} className='w-full' alt="" />
                        <div className='absolute top-0 right-0'>
                            <p className='bg-secondary text-white px-5 py-3 border-white border-8 rounded-lg '>10+ years of Experience</p>
                        </div>
                        <div className="absolute bottom-0 left-0">
                            <img src={chooselogo} className='w-full md:w-28 lg:w-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose