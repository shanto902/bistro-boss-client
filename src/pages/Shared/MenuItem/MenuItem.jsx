

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ------------------- </h3>
                <p className=" text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">{price}</p>
        </div>
    );
};

export default MenuItem;