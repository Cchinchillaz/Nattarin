import React from 'react';

function Story({ close, event }) {
    return (
        <div className="bg-black-300/90 border-2 border-white-800 rounded-xl w-[92vw] h-[70vh] sm:w-[72vw] sm:h-[62vh] lg:w-[42vw] lg:h-[62vh] p-0 self-center fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={close} className="text-neutral-400 hover:text-white-800" aria-label="Toggle menu">
                <img src="assets/close.svg" alt="close" className="w-6 h-6 absolute right-2" />
            </button>
             <div className="w-[70%] mx-[15%] h-[50%] rounded-lg" style={{backgroundImage: `url('assets/exp/${event.id}.png')`, backgroundSize: 'cover'}}></div>
             <div className='h-[50%]'>
              <p className='grid-headtext mt-4 ml-4'>{event.title}</p>
              <p className='grid-subtext mt-3 ml-4'>{event.desc}</p>
             </div>
        </div>
    );
}

export default Story;
