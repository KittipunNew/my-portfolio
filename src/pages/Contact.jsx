import React, { useEffect, useState } from "react";
import Image1 from "../images/call.png";
import Image2 from "../images/gmail.png";
import axios  from 'axios';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  // เก็บข้อมูลแบบฟอร์ม
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = { name, email, subject, message }
    try{
      const response = await axios.post('http://localhost:5000/api/contact', formData)
      console.log('Success:', response.data)
      alert('Your message has been sent!')
    }catch(err){
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  }

  return (
    <div
      className={`mt-20 shadow-lg flex justify-around items-center py-20 mx-96 rounded-2xl transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-x-10"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <h1 className="text-3xl font-bold">Let's Work Together</h1>
        <div className="flex items-center gap-5">
          <img src={Image1} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">093-106-0679</h1>
        </div>
        <div className="flex items-center gap-5">
          <img src={Image2} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">kittipun.dev@gmail.com</h1>
        </div>
      </div>

      <form className="flex flex-col justify-center items-center gap-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-blue-100 p-5 w-96 rounded-2xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="bg-blue-100 p-5 w-96 rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Subject"
          className="bg-blue-100 p-5 w-96 rounded-2xl"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Enter Your Message"
          className="bg-blue-100 p-5 w-96 rounded-2xl"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="bg-black text-white w-96 py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
