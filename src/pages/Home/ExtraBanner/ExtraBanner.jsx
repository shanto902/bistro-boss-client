import chefService from "../../../assets/home/chef-service.jpg";

const ExtraBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chefService})` }}
      className="relative min-h-[560px]  bg-cover  bg-right flex mt-20 bg-fixed"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="place-self-center text-center lg:mx-28 mx-6 bg-white lg:px-40 lg:py-24 z-10 px-10 py-5">
        <h2 className=" lg:text-5xl text-4xl font-cinzel">Bistro Boss</h2>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ExtraBanner;
