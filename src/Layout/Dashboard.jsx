import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}

    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary absolute top-3 left-3 drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to="/dashboard">Home</Link></li>
      <li><Link>Reservation</Link></li>
      <li><Link>Payment History</Link></li>
      <li><Link to='/dashboard/my-cart'>My Cart <span className="absolute left-6 top-8 badge bg-red-700 badge-sm"> {
      cart?.length || 0 } </span></Link></li>
      <li><Link>Add Review</Link></li>
      <li><Link>My Bookings</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;