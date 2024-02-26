import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
const Projects = () => {
    return (
        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] lg:w-[80%] xl:w-[60%] m-auto md:px-4'>
                <div className='text-center text-secondary'>
                    <h2 className='text-secondary font-anta text-[40px] font-[700] '>Our Successful Projects</h2>
                </div>
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
                                <div className="splide__progress__bar" />
                            </div>
                            <SplideTrack>
                                <SplideSlide>
                                    <img src={slide1} alt="Image1" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={slide2} alt="Image2" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={slide3} alt="Image3" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={slide3} alt="Image3" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={slide3} alt="Image3" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={slide3} alt="Image3" />
                                </SplideSlide>
                            </SplideTrack>
                        </div>
                    </Splide>
                </div>
            </div>
        </div>
    )
}

export default Projects;