import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");


  return (
    <section className="mb-12 2xl:px-52 xl:px-16 px-10 ">
      <SectionTitle heading="From our Menu" subHeading="Popular Items" />
      {loading ? (
        <div className="flex justify-center h-[300px] items-center">
          <progress className="progress w-56"></progress> 
        </div>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item} /> // Render the menu items
          ))}
        </div>
      )}
      <div className="flex justify-center mb-12">
        <button className="btn bg-white text-black border-0 border-b-4 hover:text-white font-medium">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
