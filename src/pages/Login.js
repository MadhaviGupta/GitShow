import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-screen flex justify-center items-center">
      <div className="w-8/12 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl">
        <div className="flex h-fit px-5 py-10">
          <div className="w-4/6">
            <img className="w-1/6 m-auto" src={logo}></img>
            <h1 className="text-5xl font-milonga text-blue-300 text-center p-8">
              Alohomora! 🔮
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
                className="w-2/6 m-auto p-2 my-3 bg-blue-100 bg-opacity-20 text-slate-50 rounded-full font-medium flex justify-center items-center hover:bg-blue-700 hover:bg-opacity-40"
                type="submit"
              >
                Login
                <FiUnlock className="ml-2" />
              </button>
              <div className="w-7/12 m-auto my-3 flex justify-between items-center">
                <hr className="opacity-25 w-5/12"></hr>
                <span className="text-blue-200">or</span>
                <hr className="opacity-25 w-5/12"></hr>
              </div>

              <button
                className="w-2/6 m-auto p-2 my-3 bg-blue-100 text-blue-900 rounded-full font-semibold flex justify-center items-center hover:bg-black hover:text-blue-100 transition-all ease-out duration-150"
                type="submit"
              >
                GitHub
                <FiGithub className="ml-2" />
              </button>
            </form>
            <p className="text-blue-200 text-center mt-12">
              No account yet?{" "}
              <Link className="underline hover:text-blue-500" to={"/join"}>
                Signup
              </Link>
              .
            </p>
          </div>
          <img
            className="w-3/6 h-full opacity-80 rounded-xl"
            src="https://images.unsplash.com/photo-1571936804022-90d128047136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></img>
        </div>
      </div>
    </div>
  );
}
