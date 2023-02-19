export default function FooterList(props) {
  return (
    <div className="mx-6 md:mx-12">
      <p className="font-semibold text-xl my-2 underline underline-offset-2 font-manrope tracking-wider">
        {props.header}
      </p>
      <ul>
        <a href="#">
          <li className="hover:text-slate-400 my-4">{props.l1}</li>
        </a>
        <a href="#">
          <li className="hover:text-slate-400 my-4">{props.l2}</li>
        </a>
        <a href="#">
          <li className="hover:text-slate-400 my-4">{props.l3}</li>
        </a>
      </ul>
    </div>
  );
}
