import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImgOne from "../public/images/bannerImgOne.jpg";
import bannerImgTwo from "../public/images/bannerImgTwo.jpg";
import bannerImgThree from "../public/images/bannerImgThree.jpg";
import bannerImgFour from "../public/images/bannerImgFour.jpg";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-44 h-8 absolute bottom-32 z-30 right-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group  ">
        <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          next
        </span>
        <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          next
        </span>
        <span className="text-lg">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-44 h-8 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          previous
        </span>
        <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          previous
        </span>
      </div>
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Slider {...settings}>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgOne}
            loading={"eager"}
            alt="bannerImgOne"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgTwo}
            loading={"lazy"}
            alt="bannerImgTwo"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgThree}
            loading={"lazy"}
            alt="bannerImgThree"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            loading={"lazy"}
            alt="bannerImgFour"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
