import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed  w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link activeClass="active" to="home" smooth={true} duration={500}>
          <img
            className=" w-[70px] hover:cursor-pointer hover: text-[#000] hover:bg-[#ccc] duration-1000 "
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <ul className=" hidden md:flex">
        <li className=" hover:text-[#000] hover:bg-[#ccc] duration-300">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:text-[#000] hover:bg-[#ccc] duration-300">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:text-[#000] hover:bg-[#ccc] duration-300">
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:text-[#000] hover:bg-[#ccc] duration-300">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=" hover:text-[#000] hover:bg-[#ccc] duration-300">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Humburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden "
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/*Social Icon*/}
      <div className=" hidden  lg:flex fixed  top-[35%] left-0">
        <ul className=" flex flex-col space-y-1">
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 ">
            <a
              className=" w-full flex justify-between items-center"
              target="_blank"
              href="https://github.com/thanhcong1506"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 ">
            <a
              className=" w-full flex justify-between items-center"
              target="_blank"
              href="https://www.facebook.com/thanhcong1506"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 ">
            <a
              className=" w-full  justify-between flex items-center"
              target="_blank"
              href="https://www.youtube.com/channel/UCNGjlHoqoMPt7pyuCBYdfxA"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 ">
            <a
              className=" w-full flex justify-between items-center"
              target="_blank"
              href="https://www.linkedin.com/in/thanhcong1506/"
            >
              Linkin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 ">
            <a
              className=" w-full flex justify-between items-center"
              target="_blank"
              href="https://www.instagram.com/thanhcong1506/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
