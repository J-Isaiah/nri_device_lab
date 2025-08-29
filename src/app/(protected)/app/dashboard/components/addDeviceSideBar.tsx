import React, { useState } from "react";
import FormInput from "../../../../components/formEntry";
import FormDropDownMenu from "../../../../components/formDropDown";

export default function AddDeviceSideBar() {
  const [deviceNicName, setDeviceNicName] = useState<string>("");
  const [deviceLocation, setDeviceLocation] = useState<string[]>([""]);
  const [status, setDeviceStatus] = useState<string[]>([""]);

  return (
    <div className="w-full h-full">
      <FormInput labelName="NickName" setFormValue={setDeviceNicName} />
      <FormInput labelName="Device Model" setFormValue={setDeviceNicName} />
      <FormDropDownMenu
        options={["UNO", "UNL", "TAMU"]}
        labelName="Location"
        setDropDownValue={setDeviceLocation}
      />
      <FormDropDownMenu
        options={["Active", "Inactive", "Broken", "Fixing"]}
        labelName="Status"
        setDropDownValue={setDeviceStatus}
      />
    </div>
  );
}
