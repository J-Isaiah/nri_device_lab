"use client";

import React, { useRef, useState } from "react";
import DeviceToc from "./components/deviceToc";
import AddDeviceButton from "./components/addDeviceButton";
import { Device } from "@/types/device";
import AddDeviceSideBar from "./components/addDeviceSideBar";

export default function DashBoardShell({
  devices,
}: {
  devices: Device[] | null;
}) {
  const [showDeviceAddSidebar, setShowDeviceAddSidebar] =
    useState<boolean>(false);

  console.log("RENDERING NOW", showDeviceAddSidebar);
  return (
    <main className="flex flex-col h-screen bg-secondary items-center justify-center">
      {showDeviceAddSidebar && (
        <div>
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={() => {
              setShowDeviceAddSidebar(false);
            }}
          ></div>
          <div className="fixed top-0 right-0 h-full w-120 bg-gray-300 shadow-2xl z-50">
            Hello
            <AddDeviceSideBar />
          </div>
        </div>
      )}
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
