import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommends = () => {

   const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch('chefRec.json')
        .then(res => res.json())
        .then(data => { 
            setItems(data);
        })

    } ,[])

    return (
        <section className="flex flex-col gap-5 justify-center items-center mb-20 ">
            <SectionTitle heading="Chef Recommends" subHeading="Should Try" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    items.map(item => <FoodCard key={item._id} item={item} /> )
                }
            </div>
            
        </section>
    );
};

export default ChefRecommends;