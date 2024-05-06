// Custom components
function InputField(props: {
  id: string;
  label?: string;
  extra?: string;
  className?: string;
  placeholder: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  onChange?: any;
  description?: string
}) {
  const {
    label,
    id,
    extra,
    type,
    placeholder,
    description,
    state,
    disabled,
    onChange,
    className
  } = props;

  return (
    <div className={`${extra}`}>
      {label && <label
        htmlFor={id}
        className="text-xl text-[#383330] font-medium"
      >
        {label}
      </label>}
      <input
        onChange={onChange}
        disabled={disabled}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${className} flex mt-5 h-12 w-full items-center justify-center rounded-xl border bg-[#F1F5F9] p-3 text-sm outline-none ${disabled === true
          ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
          : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
      />
      {description && <div className="text-[#959595] pl-4 mt-3">{description}</div>}
    </div>
  );
}

export default InputField;
