"use client";

import React from "react";
import DeviceToc from "./components/deviceToc";
import AddDeviceButton from "./components/addDeviceButton";
import { Device } from "@/types/device";

export default function DashBoardShell({
  devices,
}: {
  devices: Device[] | null;
}) {
  return (
    <main className="flex flex-col h-screen bg-secondary items-center justify-center">
      <div className="z-50 absolute bg-black h-fill w-fill items items-center justify-center flex">
        this
      </div>
      <div className="flex w-4/5 justify-end">
        <AddDeviceButton></AddDeviceButton>
      </div>
      <div className="mx-auto h-3/5 w-4/5">
        <DeviceToc devices={devices}></DeviceToc>
      </div>
    </main>
  );
}
