import React from 'react';
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiReactbootstrap } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-primary text-white dark:bg-black dark:text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Me Section */}
          <div className="md:col-span-1 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              About Me
            </h2>
            <p className="text-lg">
            Hi, I'm <span className="font-semibold">Abdelaziz Moustakim</span>, a <span className="font-semibold">Full-stack developer</span> and <span className="font-semibold">Computer science student</span> dedicated to creating seamless web experiences using modern technologies. I'm also an aspiring <span className="font-semibold">software engineer</span>.
            <span className="text-lg"> Here is a quick link to my </span><a href="https://www.azizmoustakim.com" className="font-semibold text-gray-200">portfolio</a>

            </p>
          </div>

          {/* Brand & Company Section */}
          <div className="md:col-span-1 space-y-4" data-aos="fade-up" data-aos-delay="100">
            <a href="#" className="text-4xl font-extrabold uppercase tracking-wider">
              BuyHive
            </a>
            <p className="text-lg">
              Discover cutting-edge technology and innovative gadgets, tailored to enhance your everyday life.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1 space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              Connect with Me
            </h2>
            <div className="flex justify-center md:justify-start space-x-6 text-4xl mt-6">
              <a
                href="https://www.instagram.com/accounts/onetap/?next=%2Fdirect%2Ft%2F17849347133903548%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-all duration-300 transform hover:scale-125"
              >
                <AiFillInstagram />
              </a>
              <a
                href="mailto:abdou16moustakim@gmail.com"
                className="hover:text-gray-300 transition-all duration-300 transform hover:scale-125"
              >
                <TbBrandGmail />
              </a>
              <a
                href="https://github.com/abdelazizmoustakim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-all duration-300 transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/Coding_withabdo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-all duration-300 transform hover:scale-125"
              >
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-12" data-aos="fade-up" data-aos-delay="300">
          <p className="text-lg font-light text-gray-300 dark:text-gray-100">
            This project was built using:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <FaReact className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
              <span className="text-lg font-semibold">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiRedux className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
              <span className="text-lg font-semibold">Redux</span>
            </div>
            <div className="flex items-center space-x-2">
              <RiTailwindCssFill className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
              <span className="text-lg font-semibold">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <TbBrandVite className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
              <span className="text-lg font-semibold">Vite</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiReactbootstrap className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
              <span className="text-lg font-semibold">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 dark:text-gray-100" data-aos="fade-up" data-aos-delay="400">
          <p>© {new Date().getFullYear()} BuyHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
