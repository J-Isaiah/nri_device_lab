import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { redirect } from "next/navigation";
import DeviceToc from "./components/deviceToc";
import AddDeviceButton from "./components/addDeviceButton";

export default async function Dashboard() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=app/dashboard");
  }

  return (
    <main className="flex flex-col h-screen bg-secondary items-center justify-center">
      <div className="flex w-4/5 justify-end">
        <AddDeviceButton></AddDeviceButton>
      </div>
      <div className="mx-auto h-3/5 w-4/5">
        <DeviceToc></DeviceToc>
      </div>
    </main>
  );
}
