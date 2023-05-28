import Banner from "../Banner/Banner";
import CTA from "../CTA/CTA";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ExtraBanner from "../ExtraBanner/ExtraBanner";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner />
           <Category />
           <ExtraBanner />
           <PopularMenu />
           <CTA />
           <ChefRecommends />

        </div>
    );
};

export default Home;