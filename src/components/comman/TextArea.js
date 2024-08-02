export const TextArea = (props) => (
  <div className={props.label && "pt-[18px]"}>
    {props.label && <label className="text-[#525252]">{props.label}</label>}
    <textarea
      rows={props.rows}
      placeholder={props.placeholder}
      className={`${props.className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] bg-secondary-inputColor`}
    />
  </div>
);
