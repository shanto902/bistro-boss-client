const Footer = () => {
  return (
    <footer>
      <div className="flex w-full h-[400px] font-medium">
        <div className="flex-1 flex flex-col  items-center justify-center gap-6 bg-[#1F2937] text-white">
          <h2 className="text-3xl uppercase ">Contact Us</h2>
          <p className="text-center">
            123 ABS Street, Uni 21, Bangladesh <br/>+88 123456789 <br/>Mon - Fri: 08:00 -
            22:00 <br/>Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 bg-[#111827] text-white">
            <h2 className="text-3xl uppercase ">Follow Us</h2>
            <p>Join us on social media</p>
        </div>
      </div>
      <div className="bg-black">
        <p className="text-center text-white py-4 text-xl">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
