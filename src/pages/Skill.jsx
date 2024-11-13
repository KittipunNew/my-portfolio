import React, { useEffect, useState } from 'react'
import Image1 from '../images/html.png'
import Image2 from '../images/css.png'
import Image3 from '../images/js.png'
import Image4 from '../images/react.png'
import Image5 from '../images/TailwindCSS.png'
import Image6 from '../images/mongo.png'
import Image7 from '../images/node.png'
import Image8 from '../images/express.png'

function Skill() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}>
            <div className='flex flex-col justify-center items-center gap-y-10 mt-36'>
                <h1 className='text-5xl font-bold'>Front-end</h1>
                <div className='flex text-center font-bold gap-10'>
                    <div>
                        <img src={Image1} alt="" className='w-full h-20' />
                        <h1>HTML</h1>
                    </div>
                    <div>
                        <img src={Image2} alt="" className='w-full h-20' />
                        <h1>CSS</h1>
                    </div>
                    <div>
                        <img src={Image3} alt="" className='w-full h-20' />
                        <h1>Javascript</h1>
                    </div>
                    <div>
                        <img src={Image4} alt="" className='w-full h-20' />
                        <h1>React</h1>
                    </div>
                    <div>
                        <img src={Image5} alt="" className='w-full h-20' />
                        <h1>React</h1>
                    </div>
                </div>

                <h1 className='text-5xl font-bold'>Back-end</h1>
                <div className='flex text-center font-bold gap-10'>
                    <div>
                        <img src={Image6} alt="" className='w-full h-20' />
                        <h1>MongoDB</h1>
                    </div>
                    <div>
                        <img src={Image7} alt="" className='w-full h-20' />
                        <h1>NodeJS</h1>
                    </div>
                    <div>
                        <img src={Image8} alt="" className='w-full h-20' />
                        <h1>NodeJS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
