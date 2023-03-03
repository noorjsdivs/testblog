import Image from "next/image";
import logoLight from "../public/images/logoLight.png";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoLight} width={80} height={80} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            reactBD || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsFacebook className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
