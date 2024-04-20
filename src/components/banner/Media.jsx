import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-5">
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-5">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          {/* <span className="bannerIcon">
            <SiFigma />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Media;
