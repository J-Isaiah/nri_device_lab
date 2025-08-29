import React, { useState } from "react";
import FormInput from "./formComponents/formEntry";
import FormDropDownMenu from "./formComponents/formDropDown";

export default function AddDeviceSideBar() {
  const [deviceNicName, setDeviceNicName] = useState<string>("");
  const [deeviceLocation, setDeviceLocation] = useState<string[]>([""]);

  return (
    <div className="w-full h-full">
      <FormInput labelName="NickName" setFormValue={setDeviceNicName} />
      <FormInput labelName="Device Model" setFormValue={setDeviceNicName} />
      <FormDropDownMenu
        options={["dork"]}
        labelName="Location"
        setDropDownValue={setDeviceLocation}
      />
    </div>
  );
}
