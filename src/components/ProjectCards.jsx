import { useRef } from 'react';
import img1 from '../assets/images/projectcard1.png';
import img2 from '../assets/images/projectcard2.png';
import img3 from '../assets/images/projectcard3.png';
import img4 from '../assets/images/projectcard4.png';
import { useScroll, motion, useTransform } from 'framer-motion';

const ProjectCards = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div className="w-full relative" ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            overflowY: 'auto',
            position: "static"
        }}
        >
            <div className='w-[96%] md:w-[90%] m-auto md:px-4'>
                <div className='grid grid-cols-4 gap-0'>
                    <div className='col-span-2 md:col-span-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCards