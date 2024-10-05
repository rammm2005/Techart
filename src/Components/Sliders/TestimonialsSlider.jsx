import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import TestimonialsCard from '../Cards/TestimonialsCard';

// import required modules
import { Navigation } from 'swiper/modules';

import { useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const TestimonialsSlider = () => {
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
         className="mySwiper w-full pb-10 min-h-screen"
         modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4}
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
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3.png' rating={5} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit!' name='Savannah Nguuyen' jobTitle='president of sales'  />
            </SwiperSlide>
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3-1.png' rating={5} text='Lorem ipsum adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit! dolor sit amet consectetur adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit!' name='jenny wilson' jobTitle='medical assistant'  />
            </SwiperSlide>
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3-2.png' rating={3} text='Lorem ipsum dolor sit amet consectetur adipi adipisicing elit. Placeat, velit!' name='esther howard' jobTitle='nursing assistant'  />
            </SwiperSlide>
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3-3.png' rating={2} text='Lorem  adipisicing elit. Placeat, velit!adipisicing elit. Placeat, velit! ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit! adipisicing elit.' name='cammeron williamson' jobTitle='marketing coordinator' />
            </SwiperSlide>
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3-1.png' rating={5} text='Lorem ipsum adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit! dolor sit amet consectetur adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit!' name='jenny wilson' jobTitle='medical assistant'  />
            </SwiperSlide>
            <SwiperSlide className='pb-5 pl-2'>
               <TestimonialsCard srcImg='./assets/images/Ellipse 3.png' rating={5} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit! adipisicing elit. Placeat, velit!' name='Savannah Nguuyen' jobTitle='president of sales'  />
            </SwiperSlide>
         </Swiper>
      </>
   )
}

export default TestimonialsSlider;