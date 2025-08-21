// src\services\supabase\devices.ts

import type { Device } from "@/types/device";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getDevices(): Promise<Device[] | null> {
  const supabase = await createSupabaseServerClient();
  const { data: devices, error } = await supabase
    .from("devices")
    .select(
      "id, location, status,model, device_nickname,last_updated_at,last_updated_by"
    );

  if (error) {
    console.error(
      "Issue when attempting to retreive devices from database \n error: ",
      error
    );
    throw new Error(error.message);
  }

  return devices;
}
