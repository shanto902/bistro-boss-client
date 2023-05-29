import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import coverImage from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionCover from "../../components/SectionCover/SectionCover";
import featuredImage from "../../../assets/home/chef-service.jpg"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        image={coverImage}
        heading="Our Menu"
        subHeading="Would you like to try a dish?"
      ></PageCover>

      <SectionTitle heading="Today's Offer" subHeading="Don't Miss" />
      <MenuCategory category={'offered'} />
      <SectionCover image={featuredImage} heading={"Deserts"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
      <MenuCategory category={'deserts'} />
      <SectionCover image={featuredImage} heading={"Salads"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />  

      <MenuCategory category={'salad'} />

      <SectionCover image={featuredImage} heading={"Soups"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />  
      <MenuCategory category={'soup'} />
    </div>
  );
};

export default Menu;
