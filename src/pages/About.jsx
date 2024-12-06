import React, { useEffect, useState } from 'react'
import Image from '../images/IMG_1742.jpeg'

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <div className='h-screen absolute top-0 z-[-1] flex justify-center items-center border-4'>

                <div className={`flex flex-col justify-center items-center m-80 gap-10 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}>

                    <div>
                        <img src={Image} alt="" className='rounded-lg w-96 h-96' />
                    </div>

                    <div className='mx-10 font-bold flex flex-col justify-center items-center'>
                        <h1 className='text-4xl'>I’am Kittipun Teerachokdumrongkul</h1>
                        <p className='text-2xl text-center mt-5'>Junior Software Developer with full-stack web application development
                            skills specializing in the MERN stack (MongoDB, Express, React, Node).
                            Recently completed Generation’s Bootcamp and gained additional
                            experience in communication design. Eager to integrate creative design
                            principles with technical expertise to contribute effectively as a software
                            developer. Skilled in building responsive, user-focused web applications.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
