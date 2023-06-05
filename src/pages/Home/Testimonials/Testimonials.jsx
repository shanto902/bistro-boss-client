import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="2xl:mx-72 xl:mx-64 lg:mx-32 md:mx-18  my-32">
      <SectionTitle heading="Testimonials" subHeading="What Our Clients Say" />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            {
              <div className="mx-16 flex flex-col items-center ">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly className=" my-8"
                />
                <FaQuoteLeft className=" h-[84px] w-[100px]  mb-10" />
                <p className=" font-normal text-xl text-[#444444]">
                  {review.details}
                </p>
                <h3 className="text-[#CD9003] text-3xl mt-2">{review.name}</h3>
              </div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
