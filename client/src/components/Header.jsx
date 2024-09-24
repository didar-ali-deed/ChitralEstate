import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold underline text-sm sm:text-2xl flex flex-wrap">
            <span className="text-yellow-400">Chitral</span>
            <span className="text-green-400">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-500 p-3  rounded-xl flex items-center">
          <input
            className="bg-transparent focus:outline-none w-20 sm:w-60"
            type="text"
            placeholder="Search ...? "
          />
          <FaSearch className=" text-red-700" />
        </form>
        <ul className="text-teal-300 font-bold flex gap-6 ">
          <Link to="/">
            <li className="hidden sm:inline hover:underline ">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/signin">
            <li className=" hover:underline ">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
