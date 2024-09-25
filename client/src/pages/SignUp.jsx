import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">SignUp </h1>

      <form className="flex flex-col gap-5 ">
        <input
          className="border p-3 rounded-xl "
          id="username"
          type="text"
          placeholder="username"
        />
        <input
          className="border p-3 rounded-xl "
          id="email"
          type="text"
          placeholder="email"
        />
        <input
          className="border p-3 rounded-xl "
          id="password"
          type="text"
          placeholder="password"
        />

        <button
          disbaled
          className="bg-cyan-800 p-4 font-bold rounded-xl uppercase hover:opacity-95 disabled:opacity-85"
        >
          Sign Up
        </button>

        <div className="flex gap-3 mt-3">
          Have an account?
          <Link to={"/signin"}>
            <span className="text-blue-800">sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
