const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col my-[7px]">
      <label className="font-medium">{label}</label>
      <input className="rounded px-[7px] py-[4px]" {...otherProps}/>
    </div>
  );
};

export default FormInput;
