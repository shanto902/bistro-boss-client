
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12 2xl:px-52 xl:px-16 px-10">
            <SectionTitle heading="From our Menu" subHeading="Popular Items"/>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;