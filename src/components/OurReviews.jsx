import whiteArrow from '../assets/images/footerwhitearrow.png';
import reviewsBg from '../assets/images/reviesbg.png';
import reviewClient from '../assets/images/reviewclient.png';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import quote from '../assets/images/qoute.png';
const OurReviews = () => {
    return (
        <div className="w-full bg-secondary py-[5%]">
            <div className='w-[96%] md:w-[90%] lg:w-[80%] xl:w-[70%] m-auto md:px-4'>
                <div className='text-center text-secondary'>
                    <h2 className='text-white font-anta text-[40px] font-[700] '>What Our Clients say</h2>
                    <p className='flex justify-center items-center text-white'>Read Customer Stories <span className='mx-4'><img src={whiteArrow} alt="" /></span></p>
                </div>
                <div className='my-7'>
                    <div className=" w-full relative">
                        <Splide hasTrack={false} aria-label="..." options={{
                            rewind: true,
                            type: 'loop',
                            width: "100%",
                            gap: '1rem',
                            arrows: true,
                            perPage: 3,
                            perMove: 1,
                            autoplay: true,
                            breakpoints: {
                                1440: {
                                    perPage: 3,
                                    pagination: true
                                },
                                1024: {
                                    perPage: 2,
                                    pagination: true
                                },
                                768: {
                                    perPage: 2
                                },
                                640: {
                                    perPage: 1
                                }
                            }
                        }}>
                            <div className="custom-wrapper">
                                <div className="splide__progress">
                                    {/* <div className="splide__progress__bar" /> */}
                                </div>
                                <SplideTrack>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className='relative flex overflow-hidden text-white'>
                                            <img src={reviewsBg} alt="Image3" />
                                            <div className='absolute p-5 text-sm'>
                                                <img src={quote} className='w-4 h-4' alt="Image3" />
                                                <p className='text-white text-sm my-2'>Lörem ipsum sugt rogt, ufoktiga såväl som</p>
                                                <p className='text-white text-sm font-light my-2'>“Lörem ipsum ananing diskade hypobira facebooka håhet snålsurfa när sagon, tetraguskap i klimatsäkra, kisam dibårat samt heteror vide, jons plan biism monokrokybel”</p>
                                                <div className="flex my-3">
                                                    <img src={reviewClient} alt="" />
                                                    <div className='mx-3'>
                                                        <p>Client Name</p>
                                                        <p className='font-light'>Designation in Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                            </div>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurReviews;