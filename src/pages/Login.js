import logo from "../assets/logo1.png";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase.config";

export default function Login(props) {
  const navigate = useNavigate();
  function authenticateUser() {
    if (props.username === "") {
      alert("Please enter your username.");
    } else {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          navigate("/home");
          // console.log(username);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    }
  }
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-screen flex justify-center items-center">
      <div className="w-8/12 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl">
        <div className="flex h-fit items-center">
          <img
            className="w-3/6 rounded-xl"
            alt="Let's go to Hogwarts"
            src="https://images.unsplash.com/photo-1571936804022-90d128047136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></img>
          <div className="w-4/6 p-5">
            <img className="w-2/6 m-auto" alt="logo" src={logo}></img>
            <h1 className="text-5xl font-milonga text-blue-300 text-center p-8 mb-8">
              Alohomora! 🔮
            </h1>
            <div className="flex flex-col">
              <input
                className="w-4/6 m-auto my-4 p-3 rounded-xl bg-blue-200 bg-opacity-20"
                placeholder="Github Username.."
                value={props.username}
                onChange={(e) => props.setUsername(e.target.value)}
                required
              ></input>

              <button
                onClick={authenticateUser}
                className="w-2/6 m-auto p-2 my-3 bg-blue-100 text-blue-900 rounded-full font-semibold flex justify-center items-center hover:bg-black hover:text-blue-100 transition-all ease-out duration-150"
              >
                Login
                <FiGithub className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
