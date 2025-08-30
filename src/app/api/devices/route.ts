import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createSupabaseServerClient();
  try {
    const body = await req.json();
    console.log(body);

    const payload = {
      created_by: body.userId,
      location: body.deviceLocation,
      status: body.deviceStatus,
      model: body.deviceModel,
      device_nickname: body.deviceNicName,
      last_updated_by: body.userId,
    };
    console.log(payload);
    const { data, error } = await supabase
      .from("devices")
      .insert([payload])
      .select();
    if (error) {
      throw error;
    }
    return NextResponse.json({});
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message ?? String(error) },
      { status: 400 }
    );
  }
}
