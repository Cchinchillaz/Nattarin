import React, { useState } from 'react';
import { experiences } from '../constants';
import Story from '../components/Story';

function Experiences() {
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState(null);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const handleEventClick = (exp) => {
        setEvent(exp);
        toggleIsOpen();
    };

    return (
        <section className='c-space my-10 w-full flex flex-col justify-center'>
            <div className="grid-headtext w-full flex justify-center mb-2">
                <p>Select the chocolate to see the story!</p>
            </div>
            <div className="w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] lg:w-[40vw] lg:h-[40vw] p-0 self-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-0">
                    {experiences.map((exp) => (
                        <div className="col-span-1 row-span-1 relative w-full pb-[100%]" key={exp.id}>
                            <div className="w-full h-full absolute inset-0 cursor-pointer" style={{backgroundImage: `url('assets/box/${exp.id}.png')`, backgroundSize: 'cover'}}></div>
                            <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 hover:opacity-60 cursor-pointer" onClick={() => handleEventClick(exp)}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {isOpen && <Story close={toggleIsOpen} event={event} />}
            </div>
        </section>
    );
}

export default Experiences;
