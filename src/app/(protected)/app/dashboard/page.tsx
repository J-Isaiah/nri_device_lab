import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { redirect } from "next/navigation";
import { getDevices } from "@/services/supabase/devices";
import { Device } from "@/types/device";
import DashBoardShell from "./dashBoardShell";

export default async function Dashboard() {
  const devices: Device[] | null = await getDevices();
  console.log("Devices ", devices);
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=app/dashboard");
  }

  return <DashBoardShell devices={devices}></DashBoardShell>;
}
