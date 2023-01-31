import React from "react";
import user from "../assets/user.png";

function TestimonialCard(props) {
  return (
    <div className="md:w-1/4 min-h-[20rem] text-orange-600 hover:text-purple-700 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-500 ease-out rounded-xl my-4 mx-2 p-5 flex shadow-xl">
      <div className="flex flex-col items-center text-center">
        <img src={user} alt="user" className="w-12 h-12" />
        <p className="m-2 text-2xl font-semibold">{props.name}</p>
        <p className="text-sm text-gray-500 mb-4">{props.desg}</p>
        <p className="">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center md:mt-64 w-10/12 m-auto md:w-full">
        <span className="text-4xl md:text-5xl md:text-left text-center text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-16">
          What customers say about GitShow.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      <div className="h-auto mx-10 md:mx-48">
        <div className="flex flex-col md:flex-row justify-around h-auto">
          <TestimonialCard
            name="Utkarsh Chourasiya"
            desg="GoLang Developer"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          dolore, eveniet doloribus sapiente quaerat libero fugiat, enim
          voluptas nisi eos quidem soluta "
          />
          <TestimonialCard
            name="Yash Sehgal"
            desg="Full Stack Developer, Clamp"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          dolore, eveniet doloribus sapiente quaerat libero fugiat, enim
          voluptas nisi eos quidem soluta"
          />
          <TestimonialCard
            name="Uttam Singh"
            desg="DevRel, Flare"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          dolore, eveniet doloribus sapiente quaerat libero fugiat, enim
          voluptas nisi eos quidem soluta"
          />
          <TestimonialCard
            name="Ayush Soni"
            desg="Full Stack Developer, Money"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          dolore, eveniet doloribus sapiente quaerat libero fugiat, enim
          voluptas nisi eos quidem soluta"
          />
        </div>
      </div>
    </>
  );
}
