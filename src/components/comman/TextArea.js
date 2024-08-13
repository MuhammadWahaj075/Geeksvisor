export const TextArea = ({ label, name, value, onChange, className, placeholder, rows }) => (
  <div className={label && "pt-[18px]"}>
    {label && (
      <label className="text-[#525252] label-text">{label}</label>
    )}
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      className={`${className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] bg-secondary-inputColor`}
      value={value} 
      onChange={onChange}
    />
  </div>
);
