"use client";
import React from "react";

export default function AddDeviceButton({
  setShowDeviceAddSidebar,
}: {
  setShowDeviceAddSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-end mb-4">
      <button
        className="bg-accent hover:brightness-90 text-white px-6 py-2 rounded-md shadow"
        type="button"
        onClick={() => {
          console.log("Clicking Button");
          setShowDeviceAddSidebar((prev) => !prev);
        }}
      >
        Add Device
      </button>
    </div>
  );
}
