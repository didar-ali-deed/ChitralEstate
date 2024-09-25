import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeHander = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data);
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">SignUp </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          className="border p-3 rounded-xl "
          id="username"
          onChange={changeHander}
          type="text"
          placeholder="username"
        />
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
          {loading ? "loading" : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        Have an account?
        <Link to={"/signin"}>
          <span className="text-blue-800">sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}
