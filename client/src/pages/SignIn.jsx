import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeHander = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">SignIn </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          className="border p-3 rounded-xl "
          id="email"
          onChange={changeHander}
          type="text"
          placeholder="email"
        />
        <input
          className="border p-3 rounded-xl "
          id="password"
          onChange={changeHander}
          type="text"
          placeholder="password"
        />

        <button
          disbaled={loading}
          className="bg-cyan-800 p-4 font-bold rounded-xl uppercase hover:opacity-95 disabled:opacity-85"
        >
          {loading ? "loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        Dont Have an account?
        <Link to={"/signup"}>
          <span className="text-blue-800">SignUp</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}
