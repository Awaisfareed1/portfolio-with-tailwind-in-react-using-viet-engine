import heroImg from '../assets/images/heroimg.png';
import { motion, useScroll } from 'framer-motion';

const Hero = () => {
    const { scrollYProgress } = useScroll()
    return (
        <div className='w-full h-[100vh] flex justify-center items-center bg-herobg overflow-hidden'>
            <div className='w-[96%] md:w-[90%] m-auto block md:flex justify-between items-center' >
                <div className='md:w-[50%] md:flex justify-end'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='text-center md:text-left md:w-[80%]'>
                        <h1 className=' my-5 md:my-0 text-[30px] md:text-[35px] lg:text-[50px] font-anta font-[900] text-white'>Creating the best digital solutions for your
                            <span className='text-secondary  bg-primary mx-3 px-3 transform skew-x-6'>business</span>
                        </h1>
                        <p className='text-white my-5'>Lörem ipsum sugt rogt, ufoktiga såväl som wikiläcka reanede pregt ultraskap anagt nohiras bespengen viras.</p>
                    </motion.div>
                </div>
                <div className='w-[80%] md:w-[50%] flex justify-center'>
                    <motion.img
                        initial={{ y: -60 }}
                        animate={{
                            y: 0
                        }}
                        transition={{
                            ease: 'easeOut',
                            delay: 0.8,
                            duration: 1
                        }}
                        src={heroImg} className='w-[80%] md:w-[60%]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero