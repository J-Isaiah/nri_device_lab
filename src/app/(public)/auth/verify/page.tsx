"use client";
import { createClient } from "@/utils/supabase/browser";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthError } from "@supabase/supabase-js";
export default function Verify() {
  const [userOtp, setUserOtp] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [errorBanner, setErrorBanner] = useState<string | null>();
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
  }, []);
  async function validateOtp() {
    if (!userEmail) {
      console.error("No user email found in local storage");
      setErrorBanner("User Email Undefined");
      return;
    }
    const { data, error } = await supabase.auth.verifyOtp({
      email: userEmail,
      token: userOtp.trim(),
      type: "email",
    });
    if (error) {
      console.log("error:", error);
      setErrorBanner(error.toString());
      return;
    }

    router.push("/dashboard");

    console.log(data, error);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await validateOtp();
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserOtp(e.target.value);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-white pl-10 pr-10 pt-10 rounded shadow">
        <div>
          <h1 className="text-black text-3xl text-center mb-10 font-bold">
            NRI DEVICE MANAGER - Verify
          </h1>
        </div>
        {errorBanner && (
          <div className="bg-gray p-2">
            <p className="text-red-700">{errorBanner}</p>
            <Link href="/login" className="text-blue-500 underline">
              Click here to retry
            </Link>
          </div>
        )}

        <div className="flex flex-col mb-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="userOtp" className="text-black mr-2">
              Enter One Time Password:
            </label>
            <input
              type="text"
              required
              value={userOtp}
              id="userOtp"
              onChange={handleInput}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="One Time Pass"
            />
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 rounded-sm text-white p-2 font-bold"
              >
                Submit One Time Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
