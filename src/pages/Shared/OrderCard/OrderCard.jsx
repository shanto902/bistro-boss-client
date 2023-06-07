import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const OrderCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [ , refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email }
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added to the Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card shadow-none my-4  w-96 bg-[#F3F3F3] rounded-none">
      <figure>
        <img className="h-[300px]" src={image} alt="" />
        <span className="badge absolute rounded-none bg-[#111827] right-0 top-0 mt-4 mr-4 px-3 py-5 font-semibold">
          ${price}
        </span>
      </figure>
      <div className="card-body  text-center">
        <h2 className="text-2xl font-semibold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className=" mt-6 btn text-[#BB8506] bg-[#E8E8E8] border-t-0 border-x-0 border-b-4 border-[#BB8506]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
