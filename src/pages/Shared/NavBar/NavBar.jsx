import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/our-shop">Our Shop</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-[130px] fixed z-50 bg-opacity-50 text-white bg-gray-900 flex justify-between">
       <div className="text-start btn btn-ghost">
          <a className=" normal-case">
            <span className=" text-3xl font-black font-cinzel">
              Bistro Boss
            </span>
            <br />
            <span className=" font-bold text-2xl font-cinzel tracking-[0.38em]">
              Restaurant
            </span>
          </a>
        </div>
      <div className=" place-content-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 transform rotate-180"
              fill="none"
              rotate=""
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-90 bg-gray-900 rounded-box w-52 uppercase "
          >
            {navOptions}
          </ul>
        </div>
       
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-extrabold text-xl ">{navOptions}</ul>
      </div>
    </div>
  );
};

export default NavBar;
