import logo from "../assets/logo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdPersonAddAlt } from "react-icons/md";
export default function Signup() {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const handleShow = () => {
    setShowPass(!showPass);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
    if (password.length < 8) {
      setErrormsg("Password must contain 8 characters.");
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [isConfirm, setConfirm] = useState(false);
  const confirmPassword = () => {
    var confirm = document.getElementById("confirmPass").innerText;
    var create = document.getElementById("createPass").innerText;
    if (confirm !== create) {
      setConfirm(true);
    }
  };
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full flex justify-center items-center">
      <div className="w-5/12 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl py-10">
        <img className="w-1/6 m-auto" src={logo}></img>
        <h1 className="text-5xl font-milonga text-blue-300 text-center p-8">
          Alohomora! 🔮
        </h1>
        <form className="flex flex-col">
          <div className="flex flex-row justify-center">
            <input
              className="w-1/3 mx-1 my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
              placeholder="First Name"
            ></input>
            <input
              className="w-1/3 mx-1 my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
              placeholder="Last Name"
            ></input>
          </div>
          <input
            className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
            placeholder="GitHub username"
          ></input>
          <input
            type="email"
            className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
            placeholder="Email"
          ></input>
          <div className="flex flex-row justify-center">
            <input
              type={showPass ? "text" : "password"}
              className="w-96 mx-1 my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
              placeholder="Create a password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <button
              className="mx-1 p-2 my-4 bg-blue-200 bg-opacity-20 text-slate-50 rounded-xl flex justify-center items-center hover:bg-blue-700 hover:bg-opacity-20"
              onClick={handleShow}
              onMouseDown={handleMouseDownPassword}
            >
              {showPass ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <input
            type="password"
            className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
            id="confirmPass"
            placeholder="Confirm password"
            onChange={confirmPassword}
          ></input>
          <button
            className="w-2/6 m-auto p-2 my-3 bg-blue-100 bg-opacity-20 text-slate-50 rounded-full font-medium flex justify-center items-center hover:bg-blue-700 hover:bg-opacity-40"
            type="submit"
          >
            Create Account
            <MdPersonAddAlt className="ml-2" />
          </button>
        </form>
        <p className="text-blue-200 text-center mt-12">
          Already have an account?{" "}
          <Link className="underline" to={"/login"}>
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
