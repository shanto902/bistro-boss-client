
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import useMenu from "../../../hooks/useMenu";
import OrderCard from "../../Shared/OrderCard/OrderCard";

const ChefRecommends = () => {

    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");

    return (
        <section className="flex flex-col gap-5 justify-center items-center mb-20 ">
            <SectionTitle heading="Chef Recommends" subHeading="Should Try" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    offered.map(item => <OrderCard key={item._id} item={item} /> )
                }
            </div>
            
        </section>
    );
};

export default ChefRecommends;