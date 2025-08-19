import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const PUBLIC = ["/login", "/auth/verify", "/favicon.ico"]; // <- no "/" here

export async function updateSession(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const isPublic =
    pathname === "/" ||
    PUBLIC.some((p) => pathname === p || pathname.startsWith(p));

  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // MUST be array-based getAll/setAll for @supabase/ssr v0.5+
        getAll() {
          return req.cookies.getAll(); // returns { name, value }[]
        },
        setAll(pairs) {
          pairs.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isPublic && !user) {
    const url = new URL("/login", req.url);
    url.searchParams.set("redirect", pathname + search);
    return NextResponse.redirect(url);
  }

  return res;
}
