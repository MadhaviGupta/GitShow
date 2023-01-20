export default function Divider(props) {
  return (
    <div className="flex my-40 items-center">
      <h3 className="text-slate-400 md:w-3/6 m-auto text-center ">
        {props.desc}
      </h3>
    </div>
  );
}
