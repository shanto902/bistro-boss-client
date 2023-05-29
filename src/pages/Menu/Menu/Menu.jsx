import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import coverImage from "../../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover image={coverImage} heading="Our Menu" subHeading="Would you like to try a dish?"></PageCover>
            
        </div>
    );
};

export default Menu;