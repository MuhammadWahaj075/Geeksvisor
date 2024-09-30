export const TextArea = ({ error, register = () => { }, label, name, className, placeholder, rows, minLength }) => (
  <div className={label && "pt-[18px]"}>
    {label && (
      <label className="text-primary-textArealabel label-text">{label}</label>
    )}
    <textarea
      {...register(name, {
        required: "This field is required", minLength: {
          value: minLength,
          message: `Minimum length should be ${minLength} characters`,
        },
      })}
      type={"text"}
      name={name}
      placeholder={placeholder}
      rows={rows}
      className={`${className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] bg-secondary-inputColor`}
    />
    {error && error[name] && (
      <span className="text-[12px] w-full text-start text-red-500">{error[name].message} </span>)}
  </div>
);
