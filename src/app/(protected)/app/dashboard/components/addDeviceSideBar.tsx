import React, { useState } from "react";
import FormInput from "../../../../components/formEntry";
import FormDropDownMenu from "../../../../components/formDropDown";
import SubmitButton from "@/app/components/submitButton";

export default function AddDeviceSideBar({ user }: { user: string }) {
  const [deviceNicName, setDeviceNicName] = useState<string>("");
  const [deviceLocation, setDeviceLocation] = useState<string>("");
  const [deviceStatus, setDeviceStatus] = useState<string>("");
  const [deviceModel, setDeviceModel] = useState<string>("");
  async function submitNewDevice() {
    const payload = {
      userId: user,
      deviceNicName,
      deviceModel,
      deviceLocation,
      deviceStatus,
    };
    console.log("payload", payload);

    const response = await fetch("/api/devices", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return (
    <div className="w-full h-full">
      <FormInput labelName="Nickname" setFormValue={setDeviceNicName} />
      <FormInput labelName="Device Model" setFormValue={setDeviceModel} />
      <FormDropDownMenu
        value={deviceLocation}
        options={["UNO", "UNL", "TAMU"]}
        labelName="Location"
        setDropDownValue={setDeviceLocation}
      />
      <FormDropDownMenu
        value={deviceStatus}
        options={["Active", "Inactive", "Broken", "Fixing"]}
        labelName="Status"
        setDropDownValue={setDeviceStatus}
      />
      <SubmitButton
        buttonLabel="Add New Device"
        handleSubmit={submitNewDevice}
      ></SubmitButton>
    </div>
  );
}
