import React from 'react'
import BallCanvas from '../components/Ball'
import { technologies } from '../constants/index'
import { hobbies } from '../constants/index'

function About() {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText('nattarinchet@gmail.com');
        setHasCopied(true);
        setTimeout(() => {setHasCopied(false);}, 2000);
    }
  return (
    <section className='c-space my-20' id='about'>
       <div className="grid xl:grid-cols-3 
       xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid1.png" alt="grid-1" className='w-1/2 sm:h-[276px] h-[365px] object-contain self-center' />
                    <div>
                        <p className='grid-headtext'>Hi, I am Nattarin</p>
                        <p className='grid-subtext'>I'm currently studying computer engineering 
                            at Chulalongkorn University, focusing on web development and mathematics</p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid-2" className="w-full sm:h-[276px] h-[365px] object-contain" />
                    <div>
                        <p className='grid-headtext'>Mypassions</p>
                        <p className='grid-subtext'>To be a cool dev and create unprecedented innovations for technology world, 
                            also I would like to create my own game some day!</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-[365px] flex flex-row flex-wrap justify-center items-center gap-3">
                        {technologies.map((technology) => (
                        <div className='w-14 h-14' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        </div>
                        ))}
                    </div>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>Trying to focus on many stacks, currently focusing on React</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <div>
                            <p className='grid-headtext'>My Hobbies</p>
                            <p className='grid-subtext'>I like to explore some new fun hobbies!</p>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-center w-full sm:h-[326px] h-[365px] object-contain">
                        
                        {hobbies.map((hobby) => (

                            <div key = {hobby.id}>
                                <input type="radio" name="slide" id={hobby.id} checked className="hidden" />
                                <label for={hobby.id} className='card' style={{backgroundImage: `url('assets/hobby${hobby.number}.png')`, backgroundSize: 'cover'}}>
                                    <div className="flex flex-nowrap justify-center">
                                        <div className="icon">{hobby.number}</div>
                                        <div className="description">
                                            <h4 className='grid-headtext'>{hobby.title}</h4>
                                            <p className='grid-subtext'>{hobby.desc}</p>
                                        </div>
                                    </div>
                                </label>
                            </div>

                        ))}
                    </div>

                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-[365px] object-cover sm:object-top" />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ?
                                'assets/tick.svg': 'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>nattarinchet@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

       </div>
    </section>
  )
}

export default About
