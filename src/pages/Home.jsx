import React from "react";
import Navbar from "../components/Navbar";
import ImageHome from "../images/Home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
      <>
        <img
          src={ImageHome}
          alt=""
          className="absolute z-[-1] -top-44 w-full"
        />
        <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold">Hello, I'm</h1>
          <h1 className="text-9xl font-bold">Kittipun</h1>
          <h1 className="text-7xl font-bold">a junior software developer</h1>
          <button className="bg-black text-white py-3 px-6 mt-5 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
            Download CV{" "}
          </button>
          <div className="flex gap-5">
            <Link to="https://github.com/">
                <i className="fa-brands fa-linkedin text-5xl mt-5"></i>
            </Link>
            <Link to="https://github.com/">
                <i className="fa-brands fa-github text-5xl mt-5"></i>
            </Link>
          </div>
        </div>
      </>
  );
}

export default Home;
