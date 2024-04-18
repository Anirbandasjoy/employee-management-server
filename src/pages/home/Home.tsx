import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-20 transform  relative -rotate-45 bg-emerald-100 2xl:p-16 lg:p-10 rounded-md p-7 animate-pulse">
          <div className="w-24 h-24 transform hover:scale-150 duration-100 rotate-45 cursor-pointer rounded-full ">
            <img
              className="w-full h-full rounded-full"
              src="https://i.ibb.co/6v47cjp/sebastian-herrmann-O2o1hz-DA7i-E-unsplash.jpg"
              alt="employee"
            />
          </div>
          <div className="w-24 h-24 transform hover:scale-150 duration-100 rotate-45 cursor-pointer rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://i.ibb.co/hXrW938/disruptivo-i-Q15-DTx-63k-unsplash.jpg"
              alt="employee"
            />
          </div>
          <div className="w-24 h-24 transform hover:scale-150 duration-100 rotate-45 cursor-pointer rounded-fulll">
            <img
              className="w-full h-full rounded-full"
              src="https://i.ibb.co/wd3Qsxf/charanjeet-dhiman-m-Husy-Bu4bx-M-unsplash.jpg"
              alt="employee"
            />
          </div>
          <div className="w-24 h-24 transform hover:scale-150 duration-100 rotate-45 cursor-pointer rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://i.ibb.co/6v47cjp/sebastian-herrmann-O2o1hz-DA7i-E-unsplash.jpg"
              alt="employee"
            />
          </div>
        </div>
        <Link to="/dashboard" className=" z-10 absolute">
          <Button className="text-[10px] rounded-lg transform hover:scale-110">
            Let's Explore
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
