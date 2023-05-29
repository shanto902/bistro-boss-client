

const OrderCard = ({item}) => {

    const {image, name, price, recipe} = item;


    return (
        <div className="card shadow-none my-4  w-96 bg-[#F3F3F3] rounded-none">
        <figure><img className="h-[300px]" src={image} alt="" />
        <span className="badge absolute rounded-none bg-[#111827] right-0 top-0 mt-4 mr-4 px-3 py-5 font-semibold">${price}</span></figure>
        <div className="card-body  text-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className=" mt-6 btn text-[#BB8506] bg-[#E8E8E8] border-t-0 border-x-0 border-b-4 border-[#BB8506]">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;