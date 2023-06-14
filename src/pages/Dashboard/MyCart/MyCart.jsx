import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

/**
 *TODO: Helmet
 * TODO: Active Link Nav
 *
 */
const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);


  const handleDelete = item => {
    Swal .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`, {
            method: 'DELETE'
          })
          .then(res => res.json()
          .then(data => {
            if(data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          }))
        }
      })
    
  }
  return (
    <div className="w-full">
      <div className="">
        <h2>This is myCart</h2>
        <h3>total order: {cart.length}</h3>
        <h3>total price: {total}</h3>
        <button className="btn"> Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full  ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                    {index+1}
                </td>
                <td>

                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="food image"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{item.name}</h2>
                </td>
                <td>Purple</td>
                <th>
                  <button onClick={()=> {handleDelete(item)}} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
