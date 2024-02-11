import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* main swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img className="w-full h-[800px]" src={banner1} alt="" /> */}
          <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage:
                "url(https://wallpapers.com/images/featured/project-management-wfbuewoquiigeuht.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pr-[1000px] lg:text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">
                  Organize your chaos, manage your tasks
                </h1>
                <Link to={'/dashboard'}><button className="btn btn-outline btn-success">Explore More</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className="w-full h-[800px]" src={banner2} alt="" /> */}
          <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage:
                "url(https://www.bhmpics.com/downloads/project-manager-Wallpapers/18.main-banner.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">
                  Turn your to-do list into a ta-da list
                </h1>
                <Link to={'/dashboard'}><button className="btn btn-outline btn-success">Explore More</button></Link>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className="w-full h-[800px]" src={banner3} alt="" /> */}
          <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage:
                "url(https://knowxbox.com/blogs/wp-content/uploads/2021/09/project-management-1024x683.jpeg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pl-[1000px] lg:text-right">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">
                  One task at a time, one goal at a time, one day at a time
                </h1>
                <Link to={'/dashboard'}><button className="btn btn-outline btn-success">Explore More</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
