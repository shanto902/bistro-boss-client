import PageCover from "../../Shared/PageCover/PageCover";
import coverImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import './OurShop.css'

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div>
      <PageCover
        image={coverImage}
        heading={"Our Shop"}
        subHeading={"Would you like to try a dish?"}
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
        <TabList className={"flex justify-center mt-32 mb-10 uppercase"}>
          <Tab>Salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Deserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab orderTab={'salad'}/>
        </TabPanel>
        <TabPanel>
        <OrderTab orderTab={'pizza'}/>
        </TabPanel>
        <TabPanel>
        <OrderTab orderTab={'soup'}/>
        </TabPanel>
        <TabPanel>
        <OrderTab orderTab={'deserts'}/>
        </TabPanel>
        <TabPanel>
        <OrderTab orderTab={'drinks'}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
