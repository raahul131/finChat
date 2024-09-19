import HomeImage from "../assets/homeImage.jpg";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-dvh px-4 md:px-16 bg-gradient-to-b from-white via-blue-400 mt-5 relative bg-opacity-35">
      <div className="flex flex-col md:flex-row items-center justify-center pt-16 gap-x-10">
        <div className="h-1/2 w-[85%] md:w-1/2">
          <img src={HomeImage} alt="" className="rounded-xl" />
        </div>
        <div className="mt-20 md:mt-0 text-black">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center md:text-left">
            Welcome to Finchat
          </h1>
          <p className="text-center md:text-left text-lg md:text-xl pt-3">
            Your personalized financial advisor powered by{" "}
            <span className="text-2xl font-semibold">AI</span>.
          </p>
          <button
            className="flex items-center gap-x-3 bg-blue-600 text-white py-2 px-8 rounded-full 
          font-semibold mx-auto md:mx-0 block mt-14 md:mt-8 hover:bg-white hover:text-blue-600 
          transition duration-300 shadow-md shadow-white"
          >
            <p>Start Chatting</p>
            <FaTelegramPlane size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
