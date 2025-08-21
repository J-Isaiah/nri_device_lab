import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getDevices } from "@/services/supabase/devices";
import { Device } from "@/types/device";
import React from "react";

export default async function DeviceToc() {
  const supabase = await createSupabaseServerClient();
  const devices: Device[] | null = await getDevices();

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
          <tr>hello</tr>
        </tbody>
      </table>
    </div>
  );
}
