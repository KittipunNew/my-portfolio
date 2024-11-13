import React from 'react'
import Image1 from '../images/call.png'
import Image2 from '../images/gmail.png'

function Contact() {
  return (
    <div className='mt-20 shadow-lg flex justify-around items-center py-20 mx-96 rounded-2xl'>

      <div className='flex flex-col justify-center items-center gap-y-10'>
        <h1 className='text-5xl font-bold'>Contact Me</h1>
        <h1 className='text-3xl font-bold'>Let's Work Together</h1>
        <div className='flex items-center gap-5'>
            <img src={Image1} alt="" className='w-10'/>
            <h1 className='text-2xl font-bold'>new565677@gmail.com</h1>
        </div>
        <div className='flex items-center gap-5'>
            <img src={Image2} alt="" className='w-10'/>
            <h1 className='text-2xl font-bold'>0123456789</h1>
        </div>
      </div>

      <form className='flex flex-col justify-center items-center gap-y-5'>
        <input type="text" placeholder='Enter Your Name' className='bg-blue-100 p-5 w-96 rounded-2xl' />
        <input type="email" placeholder='Enter Your Email' className='bg-blue-100 p-5 w-96 rounded-2xl' />
        <input type="text" placeholder='Enter Your Subject' className='bg-blue-100 p-5 w-96 rounded-2xl' />
        <textarea placeholder='Enter Your Message' className='bg-blue-100 p-5 w-96 rounded-2xl'></textarea>
        <button className='bg-black text-white w-96 py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
