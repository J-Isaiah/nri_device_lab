"use client";

import { Device } from "@/types/device";
import React from "react";

type DeviceRow = {
  device: Device;
};

export default function DeviceCard({ device }: DeviceRow) {
  console.log("Child prop", device);
  return (
    <tr
      onClick={() => window.open(`/app/device/${device.device_id}`)}
      className="odd:bg-primary even:bg-secondary hover:bg-accent hover:shadow-md hover:scale-[1.01] transition-transform duration-200 ease-in-out group"
    >
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
      <td className="border px-6 py-4 group-hover:text-black">
        {device.last_updated_by?.[0]?.email ?? "User Email Not Located"}
      </td>
    </tr>
  );
}
