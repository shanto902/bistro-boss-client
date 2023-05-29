import SectionTitle from "../../components/SectionTitle/SectionTitle";

import featuredImage from "../../../assets/home/featured.jpg";

const FeaturedSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featuredImage})` }}
      className="relative bg-cover pt-32  flex mt-20 bg-fixed"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="z-30">
        <SectionTitle
          heading="From our menu"
          subHeading="Check it out"
          className={"text-white"}
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-8 pb-32 2xl:mx-72 xl:mx-56 md:mx-42 mx-20 gap-16">
          <img className=" h-[100%]" src={featuredImage} alt="" />
          <div className="text-white place-self-center">
            <p>March 20, 2023</p>
            <h3>WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent border-t-0 border-x-0 border-b-4 border-white mt-11 place">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
