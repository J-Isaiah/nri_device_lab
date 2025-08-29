import React from "react";

type FormProp = {
  labelName: string;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormInput({ labelName, setFormValue }: FormProp) {
  return (
    <div className="flex flex-col w-full p-5">
      <div className="p-5">
        <label className="text-black pr-5 font-bold text-xl">
          {labelName}:
        </label>
        <input
          className="w-full bg-white text-black px-3 py-3 focus:ring-3 focus:ring-accent focus:outline-none shadow-2xl/30"
          type="text"
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
