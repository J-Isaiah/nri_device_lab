import { Device } from "@/types/device";
import React from "react";
import DeviceCard from "./deviceCard";

export default function DeviceToc({ devices }: { devices: Device[] | null }) {
  console.log(devices);

  return (
    <div className="bg-primary h-full w-full shadow-2xl ">
      <table className="table-auto w-full text-highlight border border-highlight">
        <thead className="bg-secondary">
          <tr className="">
            <th className="border border-highlight px-4 py-4">Nickname</th>
            <th className="border border-highlight px-4 py-4">Location</th>
            <th className="border border-highlight px-4 py-4">Model</th>
            <th className="border border-highlight px-4 py-4">Status</th>
            <th className="border border-highlight px-4 py-4">Last Updated</th>
            <th className="border border-highlight px-4 py-4">Updated By</th>
          </tr>
        </thead>
        <tbody>
          {devices ? (
            devices.map((d) => <DeviceCard key={d.device_id} device={d} />)
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No Devices Avaliable
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
