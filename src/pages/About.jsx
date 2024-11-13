import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../images/IMG_1742.jpeg'

function About() {
    return (
        <>
            <div className='h-screen absolute top-0 z-[-1] flex justify-center items-center'>

                <div className='flex justify-center items-center m-80 gap-10'>

                    <div>
                        <img src={Image} alt="" className='rounded-lg w-full h-full' />
                    </div>

                    <div className='mx-10 font-bold'>
                        <h1 className='text-4xl'>I’am Kittipun Teerachokdumrongkul</h1>
                        <p className='text-2xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec ultricies purus ex. Nulla facilisi. In hac habitasse <br />platea dictumst. Donec vel tortor maximus, eleifend ligula sed, dapibus quam. Sed bibendum nunc at velit mollis</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About