import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ category }) => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === `${category}`);
  return (
    <section className="mb-12 2xl:px-52 xl:px-16 px-10">
      {loading ? (
        <>
          <div className="h-[300px] flex justify-center">
            <progress className="progress w-56"></progress>
          </div>
        </>
      ) : (
        <>
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
            {popular.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to={`/our-shop/${category}`}
              className="btn bg-white text-black border-0 border-b-4 hover:text-white font-medium"
            >
              Order Your Favorite Food
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default MenuCategory;
