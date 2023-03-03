import { FiCheckCircle } from "react-icons/fi";
export default function NoPost() {
  return (
    <div className="bg-black font-manrope tracking-wide bg-opacity-20 rounded-2xl p-4 flex flex-col items-center mt-4 mb-16 md:mb-4">
      <FiCheckCircle className="text-green-400 text-3xl my-2" />
      <h2>Oops.. That's all for now</h2>
      <h2>Let's get back to the top.</h2>
    </div>
  );
}
