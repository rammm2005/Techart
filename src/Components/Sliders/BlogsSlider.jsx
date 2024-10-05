import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import TestimonialsCard from '../Cards/TestimonialCard';

// import required modules
import { Navigation } from 'swiper/modules';

import { useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import BlogCard from '../Cards/BlogCard';

import blogs from '../../data/blogs';


const BlogsSlider = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   
   return(
      <>
         <div className="flex space-x-4">
            <button ref={prevRef} className="bg-white text-primary border border-primary hover:text-white hover:bg-primary rounded-full p-2 text-2xl font-bold transition-all duration-300 mb-8">
               <GoArrowLeft />
            </button>
            <button ref={nextRef} className="bg-white text-primary border border-primary hover:text-white hover:bg-primary rounded-full p-2 text-2xl font-bold transition-all duration-300 mb-8">
               <GoArrowRight />
            </button>
         </div>
         <Swiper
         className="mySwiper w-full pb-10"
         modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            loop
            navigation={{
               prevEl: prevRef.current,
               nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
               swiper.params.navigation.prevEl = prevRef.current;
               swiper.params.navigation.nextEl = nextRef.current;
               swiper.navigation.init();
               swiper.navigation.update();
            }}
         >
            {
               blogs.map((data, index) => (
                  <SwiperSlide className='pb-5 pl-2' key={index}>
                     <BlogCard 
                        img={data.img}
                        date={data.date}
                        title={data.title}
                        desc={data.desc}
                        like={data.like}
                        comments={data.comments}
                        share={data.share}
                        />
                  </SwiperSlide>
                  )
               )
            }
         </Swiper>
      </>
   )
}

export default BlogsSlider;