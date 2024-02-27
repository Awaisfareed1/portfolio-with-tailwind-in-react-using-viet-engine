import valuegroup from '../assets/images/valuegroup.png';
import { easeOut, motion } from 'framer-motion';
const Values = () => {
    return (
        <div className="w-full bg-secondary my-[5%] py-10">
            <div className='w-[96%] md:w-[90%] lg:w-[80%]  m-auto md:px-4'>
                <div className='grid grid-cols-2'>
                    <motion.div 
                    // animate={{rotate : [0,45, 90, 135, 180, 225, 270, 315, 360]}}
                    // transition={{
                    //     ease: 'easeOut',
                    //     repeat: Infinity,
                    //     duration: 10,
                    //     delay: 6,
                        
                    // }}
                    className="col-span-2 md:col-span-1 flex justify-center items-center">
                        <img src={valuegroup} alt="" />
                    </motion.div>
                    <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                        <div className='text-white w-full md:w-[90%] lg:w-[70%]'>
                            <h2 className=' font-anta text-[40px] font-[700] '>Our values</h2>
                            <p className='text-white my-5'>Lörem ipsum popyledes dilar poräning dott ses paren fast anan, lähys blandkostare och pseudokira men pyl pseudorade decisk kontraliga med tårtgate för fadihet. Diligt lesavis dodov än näthat spesade emedan las, och lyrad inte ber dovuska samt rede, poliga pokenad ifall diabigår efass bötning. Tikogt intragt, emedan euronar och lyr bett gigakros. Du kan vara drabbad. </p>
                            <motion.button 
                            transition={{
                                scale: 1.5,
                                ease: 'easeOut'
                            }}
                            className='bg-primary text-secondary rounded-3xl px-3 py-2 font-semibold font-anta'>Read More</motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values;