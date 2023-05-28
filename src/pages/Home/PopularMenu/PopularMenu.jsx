import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{ 
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12">
            <SectionTitle heading="From our Menu" subHeading="Popular Items"/>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;