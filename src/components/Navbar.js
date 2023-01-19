import logo from "../assets/logo1.png";
export default function Navbar() {
  return (
    <nav className="flex justify-around mx-auto max-h-24 bg-slate-900 bg-opacity-25 drop-shadow-lg backdrop-blur-2xl mb-20">
      <div className="w-3/6 flex">
        <div className="w-1/6 flex content-center">
          <img className="w-4/6 p-2" src={logo}></img>
        </div>
        <ul className="w-4/12 flex justify-around text-slate-50 items-center">
          <li>
            <a href="">Hello</a>
          </li>
          <li>
            <a href="">Madhavi</a>
          </li>
          <li>
            <a href="">God!</a>
          </li>
        </ul>
      </div>
      <div className="w-[5%] self-center">
        <img
          className="rounded-full w-10"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </nav>
  );
}
