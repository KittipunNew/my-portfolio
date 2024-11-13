import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../images/box.png'
import Image2 from '../images/order.png'
import Image3 from '../images/learning-platform.png'

function Project() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <>
            <div className={`flex justify-around items-center bg-gray-100 py-5 mx-96 rounded-2xl mt-20 shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}>
                <img src={Image1} alt="" className='w-20' />
                <h1 className='text-5xl font-bold'>Project_01</h1>
                <Link to="https://github.com/">
                    <i className="fa-brands fa-github text-8xl mt-5"></i>
                </Link>
            </div>
            <div className={`flex justify-around items-center bg-gray-100 py-5 mx-96 rounded-2xl mt-20 shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}>
                <img src={Image2} alt="" className='w-20' />
                <h1 className='text-5xl font-bold'>Project_02</h1>
                <Link to="https://github.com/">
                    <i className="fa-brands fa-github text-8xl mt-5"></i>
                </Link>
            </div>
            <div className={`flex justify-around items-center bg-gray-100 py-5 mx-96 rounded-2xl mt-20 shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}>
                <img src={Image3} alt="" className='w-20' />
                <h1 className='text-5xl font-bold'>Project_03</h1>
                <Link to="https://github.com/">
                    <i className="fa-brands fa-github text-8xl mt-5"></i>
                </Link>
            </div>
        </>
    )
}

export default Project
