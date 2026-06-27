import React from "react";
import { useEffect,useState,useRef } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Slider(){
    const[banners,setBanners]=useState([]);
    const[current,setCurrent]=useState(1)
    const swiperRef = useRef(null);
    useEffect(()=>{
      fetch("/banners/banners.json")
      .then(res=>res.json())
      .then(data=>setBanners(data))
    },[] )

     return (
    <div className="mt-5">


      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}

        modules={[
          Pagination,
          Autoplay
        ]}

        pagination={{
          clickable:true
        }}

        autoplay={{
          delay:4000
        }}

        loop={true}

        slidesPerView={1.15}

        spaceBetween={20}

        centeredSlides={true}


        onSlideChange={(swiper)=>{
          setCurrent(swiper.realIndex + 1)
        }}

        className="mySwiper"

      >


        {banners.map((banner)=>(
          
          <SwiperSlide key={banner.id}>


            <div
              className="
              h-[430px]
              rounded-2xl
              overflow-hidden
              relative
              bg-cover
              bg-center
              "
              style={{
                backgroundImage:`url(${banner.img})`
              }}
            >


              

              <div 
              className="
              absolute
              left-20
              top-1/3
              -translate-y-1/2
              text-white
              "
              >

                <h1 
                className="
                pere-xod
                text-4xl
                font-bold
                whitespace-pre-line
                w-[60%]
                
                "
                >
                  {banner.title}
                </h1>


                <p 
                className="
                swipe-xod
                mt-4
                text-xl
                w-[40%]
                whitespace-pre-line
                "
                >
                  {banner.text}
                </p>


              </div>


            </div>


          </SwiperSlide>

        ))}



      </Swiper>


    

      <div className="
      flex 
      justify-center 
      items-center 
      gap-5 
      mt-5
      ">


        <button className="text-3xl" onClick={() => swiperRef.current?.slidePrev()}>
          ‹
        </button>


        <div 
        className="
        bg-gray-200
        rounded-full
        px-5
        py-2
        "
        >
          {current} / {banners.length}
        </div>


        <button className="text-3xl" onClick={() => swiperRef.current?.slideNext()}>
          ›
        </button>


      </div>


    </div>
    )
}
export default Slider;