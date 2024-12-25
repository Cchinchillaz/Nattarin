import React from 'react'

function Story(props) {
  return (
    <div className='w-full bg-black-300 flex justify-center'>
      <div className="bg-white-800 rounded-xl w-[92vw] h-[90vw] sm:w-[72vw] sm:h-[72vw]  lg:w-[42vw] lg:h-[42vw] p-0 self-center fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className='bg-black-300/50 p-2 rounded-sm' onClick={props.close}>close</button>
      </div>
    </div>
  )
}

export default Story
