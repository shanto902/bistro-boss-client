import useMenu from "../../../hooks/useMenu";
import OrderCard from "../../Shared/OrderCard/OrderCard";

const OrderTab = ({ orderTab }) => {
  const [menu] = useMenu();
  const items = menu.filter((item) => item.category === `${orderTab}`);
  return (
    <section className="mb-12 2xl:px-52 xl:px-16 px-10 flex justify-center">
      <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6  place-items-stretch ">
        {items.map((item) => (
          <OrderCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OrderTab;
