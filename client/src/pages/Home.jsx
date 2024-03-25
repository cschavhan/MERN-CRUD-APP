import { Link } from "react-router-dom";
import HomePageImage from "../Assets/Images/HomePageImage.webp";

function Home() {
  return (
    <div className="pt-20 text-white flex items-center justify-center gap-10 pl-11 h-[95vh] bg-gray-800">
      <div className="w-1/2 space-y-6">
        <h1 className="text-5xl font-semibold mt-24">
          Find out best
          <span className="text-yellow-500 font-bold"> Online Courses</span>
        </h1>
        <p className="text-xl text-white">
          We have a large library of courses taught by highly skilled and
          qualified faculties at very affordable price
        </p>

        <div className="space-x-6">
          <Link to="/courses">
            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-700 hover:text-black  transition ease-in-out duration-300">
              Explore courses
            </button>
          </Link>

          <Link to="/contact">
            <button className="border bg-yellow-500 border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-700 hover:text-black  transition ease-in-out duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img src={HomePageImage} alt="HomePageImage" />
      </div>
    </div>
  );
}

export default Home;
