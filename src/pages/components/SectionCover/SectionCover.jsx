

const SectionCover = ({image, heading, subHeading}) => {
    return (
        <div className="hero h-[700px] bg-fixed mb-28" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="relative  z-10">
            <h1 className="text-5xl font-bold font-cinzel mb-2 uppercase">{heading}</h1>
            <p className="  text-base normal-case">{subHeading}</p>
         
          </div>
          <div className=" absolute w-[1320px] h-[450px] bg-black opacity-60"></div>
        </div>
      </div>
    );
};

export default SectionCover;