"use client";

import React, { useState } from "react";
import DeviceToc from "./components/deviceToc";
import AddDeviceButton from "./components/addDeviceButton";
import { Device } from "@/types/device";

export default function DashBoardShell({
  devices,
}: {
  devices: Device[] | null;
}) {
  const [showDeviceAddSidebar, setShowDeviceAddSidebar] =
    useState<boolean>(false);
  return (
    <main className="flex flex-col h-screen bg-secondary items-center justify-center">
      <div className="flex w-4/5 justify-end">
        <AddDeviceButton
          setShowDeviceAddSidebar={setShowDeviceAddSidebar}
        ></AddDeviceButton>
      </div>
      <div className="mx-auto h-3/5 w-4/5">
        <DeviceToc devices={devices}></DeviceToc>
      </div>
    </main>
  );
}
