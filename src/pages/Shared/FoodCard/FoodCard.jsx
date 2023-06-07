
const FoodCard = ({item}) => {

  const handleAddToCart = item => {
    console.log(item)


  }

    const {name, image, recipe} = item
    return (
        <div className="card shadow-none  w-96 bg-[#F3F3F3] rounded-none">
        <figure><img className="h-[300px]" src={image} alt="" /></figure>
        <div className="card-body  text-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleAddToCart(item)} className=" mt-6 btn text-[#BB8506] bg-[#E8E8E8] border-t-0 border-x-0 border-b-4 border-[#BB8506]">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;