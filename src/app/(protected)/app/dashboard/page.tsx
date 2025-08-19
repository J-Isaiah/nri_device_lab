import { createSupabaseServerClient } from "../../../../utils/supabase/server";
import { redirect } from "next/navigation";

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

  return <h1 className="text-xl">you are in the dashboard</h1>;
}
