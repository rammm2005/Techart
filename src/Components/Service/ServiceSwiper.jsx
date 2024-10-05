import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import service from "../../data/service";

const SwiperService = () => {
    const swiperRef = useRef(null);

    const handleClickPrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
        console.log("swiper prev");
    };

    const handleClickNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
        console.log("swiper next");
    };

    return (
        <>
            <section className="flex flex-col mt-32">
                <div className="relative flex flex-col items-center w-full">
                    <h6 className="uppercase text-lg font-semibold text-center text-blue-600">Service</h6>
                    <h1 className="text-6xl font-bold text-center text-slate-900">
                        Exploring My Design <b className="text-blue-600">Skills</b>
                    </h1>
                    <p className="text-center items-center text-slate-600 text-base max-w-[40rem]">
                        We transform your ideas into a distinctive web project that both inspires you and captivates your customers.
                    </p>
                </div>

                <section className="flex flex-col gap-4">
                    <div className="relative justify-end items-end w-full mt-8">
                        <div className="flex flex-row justify-end items-end gap-4">
                            <Button
                                isIconOnly={true}
                                onClick={handleClickPrev}
                                className="p-2 rounded-full border border-blue-500 hover:bg-blue-600 hover:border-slate-100"
                                startIcon={<HiMiniArrowLongLeft className="text-2xl text-blue-500 hover:text-white" />}
                            />
                            <Button
                                isIconOnly={true}
                                onClick={handleClickNext}
                                className="p-2 rounded-full border border-blue-500 hover:bg-blue-600 hover:border-slate-100"
                                startIcon={<HiMiniArrowLongRight className="text-2xl text-blue-500 hover:text-white" />}
                            />
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3.5}
                        centeredSlides={false}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                            },
                            480: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1024: {
                                slidesPerView: 3.5,
                            },
                            1280: {
                                slidesPerView: 3.5,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation]}
                        className="mySwiper w-full"
                    >
                        {service.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="group">
                                    <article className="flex flex-col items-start gap-4 p-4 rounded-md cursor-pointer group-hover:bg-blue-500 transition-all ease-in-out duration-300">
                                        <img alt={`service ${data.title}`} className="w-20 h-20" src={data.image} />
                                        <h3 className="text-xl font-semibold group-hover:text-white text-wrap">
                                            {data.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 group-hover:text-white text-justify">
                                            {data.description}
                                        </p>
                                        <Button className="flex flex-row gap-2 group-hover:text-white" endIcon={<HiMiniArrowLongRight className="text-xl" />} text="Learn More" />
                                    </article>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>
        </>
    );
};

export default SwiperService;
