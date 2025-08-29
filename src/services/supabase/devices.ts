// src\services\supabase\devices.ts

import type { Device } from "@/types/device";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getDevices(): Promise<Device[] | null> {
  const supabase = await createSupabaseServerClient();
  const { data: devices, error } = await supabase.from("devices").select(
    `
    device_id,
    location,
    status,
    model,
    device_nickname,
    last_updated_at,
    last_updated_by:users!devices_last_updated_by_fkey (
      id,
      email
    )
  `
  );
  console.log(devices);

  if (error) {
    console.error(
      "Issue when attempting to retreive devices from database \n error: ",
      error
    );
    throw new Error(error.message);
  }
  return devices.map(
    (d: any): Device => ({
      ...d,
      last_updated_by: Array.isArray(d.last_updated_by)
        ? d.last_updated_by[0] ?? undefined
        : d.last_updated_by,
    })
  );
}
