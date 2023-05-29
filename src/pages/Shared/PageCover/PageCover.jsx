const PageCover = ({image, heading, subHeading}) => {
    return (
        <div className="hero h-[800px] bg-fixed" style={{ backgroundImage: `url(${image})` }}>
  <div className="hero-content text-center text-neutral-content">
    <div className="relative  z-10">
      <h1 className="text-[88px] font-bold font-cinzel mb-2 uppercase">{heading}</h1>
      <p className=" font-cinzel uppercase">{subHeading}</p>
   
    </div>
    <div className=" absolute w-[1320px] h-[450px] bg-black opacity-60"></div>
  </div>
</div>
      
    );
};

export default PageCover;