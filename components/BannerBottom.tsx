import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center h-60 bg-bgColor text-white py-10 px-8 -mt-20 z-50">
      <div className="w-[60%] flex flex-col gap-3">
        <p className="text-sm uppercase font-bodyFont font-semibold text-white/50">
          My Blog
        </p>
        <h3 className="font-bold text-3xl">
          These 7 things will change the way you approach learning!
        </h3>
        <p className="text-xs text-white/50">Camila Hoffman / 4 weeks ago</p>
      </div>
      <div className="w-[40%] flex items-center gap-8">
        <div className="flex flex-col items-center group">
          <MdOutlineMonitor className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-sm font-titleFont text-white/50 group-hover:text-white">
            watch on youtube
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <IoMdHeartEmpty className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-sm font-titleFont text-white/50 group-hover:text-white">
            like our contents
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <GoComment className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-sm font-titleFont text-white/50 group-hover:text-white">
            place your comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
