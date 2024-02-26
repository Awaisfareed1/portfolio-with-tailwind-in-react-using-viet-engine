import ceo from '../assets/images/ceo.png';
import whiteArrow from '../assets/images/footerwhitearrow.png';
const TalkUs = () => {
    return (
        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] lg:w-[60%]  m-auto md:px-4'>
                <div className="bg-primary rounded-3xl flex flex-col md:flex-row justify-between items-center p-10">
                    <div className='text-center md:text-start'>
                        <h1 className='font-[700] font-anta text-secondary text-[30px]'>Let us talk about your next Project</h1>
                        <div className='flex justify-center md:block mt-8 mb-8'>
                            <button className=' bg-secondary text-white px-8 py-3 flex justify-center items-center rounded-2xl'><img src={whiteArrow} className='mr-4' alt="" /><span>Talk to an Expert</span></button>
                        </div>
                    </div>
                    <div>
                        <img src={ceo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalkUs;