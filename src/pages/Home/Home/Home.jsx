import Banner from "../Banner/Banner";
import CTA from "../CTA/CTA";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ExtraBanner from "../ExtraBanner/ExtraBanner";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner />
           <Category />
           <ExtraBanner />
           <PopularMenu />
           <CTA />
           <ChefRecommends />
           <FeaturedSection />
           <Testimonials />

        </div>
    );
};

export default Home;