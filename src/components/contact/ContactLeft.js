import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aditya Sharma</h3>
        <p className="text-lg font-normal text-gray-400">
        Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Full stack developer, passionate about crafting robust web applications with a focus on innovation and user experience.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6307186696</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">adityasharma.officially01@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/aditya-sharma-a40163271/" target="_blank" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/home" target="_blank" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://github.com/AdityaSharma2003" target="_blank" className="bannerIcon">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft