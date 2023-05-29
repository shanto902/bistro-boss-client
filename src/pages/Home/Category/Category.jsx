import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Category.css";

import slide1 from "./../../../assets/home/slide1.jpg";
import slide2 from "./../../../assets/home/slide2.jpg";
import slide3 from "./../../../assets/home/slide3.jpg";
import slide4 from "./../../../assets/home/slide4.jpg";
import slide5 from "./../../../assets/home/slide5.jpg";

import { Pagination } from "swiper";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  const MyCustomSwiper = (img, title) => (
    <SwiperSlide className="mb-10 ">
      <div
        style={{ backgroundImage: `url(${img})`}}
        className=" display flex min-h-[450px] bg-cover w-full justify-center "
      >
        <h2 className="relative font-cinzel uppercase self-center mt-64 text-4xl text-white z-10">{title}</h2>
        <h2 className="absolute font-cinzel uppercase self-center mt-64 drop-shadow-lg text-4xl text-black bottom-[16.6%] ">{title}</h2>
      </div>
    </SwiperSlide>
  );

  return (
   <section className="px-10">
    <SectionTitle heading="Order Online" subHeading="From 11:00am to 10:00pm"/>
     <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper sm:flex-col"
    >
        {MyCustomSwiper(slide1, "Salads")}
        {MyCustomSwiper(slide2, "Soups")}
        {MyCustomSwiper(slide3, "Pizza")}
        {MyCustomSwiper(slide4, "Deserts")}
        {MyCustomSwiper(slide5, "Salads")}

    </Swiper>
   </section>
  );
};

export default Category;
