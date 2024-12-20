import React, { useEffect, useState } from "react";
import ImageHome from "../images/Home.png";
import { Link } from "react-router-dom";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <>
        <img
          src={ImageHome}
          alt=""
          className="absolute z-[-1] -top-44 w-full"
        />
        <div className={`flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-3xl font-bold">Hello, I'm</h1>
          <h1 className="text-9xl font-bold">Kittipun</h1>
          <h1 className="text-7xl font-bold">a junior software developer</h1>
          <Link to="https://drive.google.com/file/d/1kFPC9pTiBkF2qiKiGiklbvlRSwZ5WPJZ/view?usp=sharingf" target="_blank" className="bg-black text-white py-3 px-6 mt-5 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
            Download CV
          </Link>
          <div className="flex gap-5">
            <Link to="https://github.com/KittipunNew" target="_blank">
                <i className="fa-brands fa-github text-5xl mt-5"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/kittipun-teerachokdumrongkul-348887330//" target="_blank">
                <i className="fa-brands fa-linkedin text-5xl mt-5"></i>
            </Link>
          </div>
        </div>
      </>
  );
}

export default Home;
