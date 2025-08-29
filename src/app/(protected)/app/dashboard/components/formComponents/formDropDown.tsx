import React from "react";

type DropDownProp = {
  labelName: string;
  setDropDownValue: React.Dispatch<React.SetStateAction<string[]>>;
  options: string[];
};

export default function FormDropDownMenu({
  labelName,
  setDropDownValue,
  options,
}: DropDownProp) {
  return (
    <div className="flex flex-col w-full p-5">
      <div className="p-5">
        <label className="text-black pr-5 font-bold text-xl">
          {labelName}:
        </label>
        <select className="w-full bg-white text-black px-3 py-3 focus:ring-3 focus:ring-accent focus:outline-none shadow-2xl/30">
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
