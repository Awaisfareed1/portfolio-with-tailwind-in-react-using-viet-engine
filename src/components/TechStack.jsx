import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import stackbg from '../assets/images/stackbg.png';
import php from '../assets/images/php.png';
import python from '../assets/images/python.png';
import codeigniter from '../assets/images/codeigniter.png';
import swift from '../assets/images/swift.png';
import nodejs from '../assets/images/nodejs.png';
import java from '../assets/images/java.png';
import json from '../assets/images/json.png';
import js from '../assets/images/js.png';
const TechStack = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (

        <div className="w-full my-[5%]">
            <div className='w-[96%] md:w-[90%] m-auto md:px-4'>
                <div className='text-center text-secondary'>
                    <h2 className='text-secondary font-anta text-[40px] font-[700] '>Our Tech Stack</h2>
                </div>
                <div className="py-5">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Blackend</Tab>
                            <Tab>Frontend</Tab>
                            <Tab>Mobile Apps</Tab>
                        </TabList>
                        <TabPanel className="mt-8">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={php} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={python} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={codeigniter} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={swift} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 mt-5 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={nodejs} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={java} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={json} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={js} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="mt-8">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={php} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={python} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={codeigniter} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={swift} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 mt-5 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={nodejs} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={java} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={json} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={js} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="mt-8">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={php} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={python} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={codeigniter} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={swift} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 mt-5 gap-3">
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={nodejs} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={java} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={json} className="absolute" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                                    <div className="flex justify-center items-center relative">
                                        <img src={stackbg} alt="" />
                                        <img src={js} className="absolute" alt="" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>

    )
}

export default TechStack