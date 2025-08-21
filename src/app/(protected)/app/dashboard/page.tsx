import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { redirect } from "next/navigation";
import DeviceToc from "./components/deviceToc";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Dashboard() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=app/dashboard");
  }

  return (
    <main className="flex h-screen bg-secondary items-center justify-center">
      <div className="mx-auto h-4/5 w-4/5">
        <DeviceToc></DeviceToc>
      </div>
    </main>
  );
}
