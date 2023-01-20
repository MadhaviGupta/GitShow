import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-screen flex justify-center items-center">
      <div className="w-5/12 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl py-16">
        <img className="w-1/6 m-auto" src={logo}></img>
        <h1 className="text-5xl font-semibold text-blue-300 text-center p-8">
          Welcome Back! 🪄
        </h1>
        <form className="flex flex-col">
          <input
            className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
            placeholder="Username"
          ></input>
          <input
            className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
            placeholder="Password"
          ></input>
          <button
            className="w-2/6 m-auto p-2 my-3 bg-blue-100 bg-opacity-20 text-slate-50 rounded-full font-semibold"
            type="submit"
          >
            Login
          </button>
          <button
            className="w-2/6 m-auto p-2 my-3 bg-blue-100 text-blue-900 rounded-full font-semibold"
            type="submit"
          >
            Github
          </button>
        </form>
        <p className="text-blue-200 text-center mt-12">
          No account yet?{" "}
          <Link className="underline" to={"/join"}>
            Signup
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
