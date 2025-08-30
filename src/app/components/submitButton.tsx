"use client";
import React from "react";

type SubmitButtonProps = {
  buttonLabel: string;
  handleSubmit: () => void | Promise<void>;
};

export default function SubmitButton({
  buttonLabel,
  handleSubmit,
}: SubmitButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={(e) => {
          e.preventDefault();

          handleSubmit();
        }}
        className="m-10 p-3 bg-accent border-b-4 border-accent-dark transition-all duration-150 shadow-md active:shadow-inner hover:shadow-lg rounded-sm w-full flex justify-center hover:bg-accent-dark font-bold text-lg "
      >
        {buttonLabel}
      </button>
    </div>
  );
}
