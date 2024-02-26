import { useState } from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
const WorkingClients = () => {
    return (
        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] m-auto md:px-4 relative -z-0 '>
                < div className="w-full md-w-[90%] xl:w-[60%]" >
                    <h1 className='text-secondary font-anta text-[20px] md:text-[25px] lg:text-[40px] font-[700] '>We Have Had the Pleasure
                        of Working with Some Clients</h1>
                </div >
                <div className='grid grid-cols-4 gap-3 my-2'>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 relative flex justify-center items-center">
                        <img src={client1} className='block hover:opacity-0 transition ease-in-out duration-1000 cursor-pointer' alt="" />
                        <img src={client2} className="absolute h-full opacity-0 hover:opacity-100 transition ease-in-out duration-1000 cursor-pointer" alt='' />
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 relative flex justify-center items-center">
                        <img src={client1} className='block hover:opacity-0 transition ease-in-out duration-1000 cursor-pointer' alt="" />
                        <img src={client2} className="absolute h-full opacity-0 hover:opacity-100 transition ease-in-out duration-1000 cursor-pointer" alt='' />
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 relative flex justify-center items-center">
                        <img src={client1} className='block hover:opacity-0 transition ease-in-out duration-1000 cursor-pointer' alt="" />
                        <img src={client2} className="absolute h-full opacity-0 hover:opacity-100 transition ease-in-out duration-1000 cursor-pointer" alt='' />
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 relative flex justify-center items-center">
                        <img src={client1} className='block hover:opacity-0 transition ease-in-out duration-1000 cursor-pointer' alt="" />
                        <img src={client2} className="absolute h-full opacity-0 hover:opacity-100 transition ease-in-out duration-1000 cursor-pointer" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingClients
