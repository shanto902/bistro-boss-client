const SectionTitle = ({heading, subHeading, className=""}) => {
    return (
        <div className={`md:w-4/12 mx-auto text-center my-8 font-normal ${className}`}>
            <p className="text-[#D99904] mb-2 italic">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;