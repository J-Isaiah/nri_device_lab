import { Device } from "@/types/device";
import React from "react";

type DeviceRow = {
  device: Device;
};
export default function DeviceCard({ device }: DeviceRow) {
  return (
    <tr className="odd:bg-primary even:bg-secondary hover:bg-accent hover:shadow-md hover:scale-[1.01] transition-transform duration-200 ease-in-out group">
      <td className="border px-6 py-4 group-hover:text-black first:rounded-l-lg">
        {device.device_nickname}
      </td>
      <td className="border px-6 py-4 group-hover:text-black">
        {device.location}
      </td>
      <td className="border px-6 py-4 group-hover:text-black">
        {device.model}
      </td>
      <td className="border px-6 py-4 group-hover:text-black">
        {device.status}
      </td>
      <td className="border px-6 py-4 group-hover:text-black">
        {new Date(device.last_updated_at).toLocaleString()}
      </td>
      <td className="border px-6 py-4 group-hover:text-black last:rounded-r-lg">
        {device.last_updated_by}
      </td>
    </tr>
  );
}
