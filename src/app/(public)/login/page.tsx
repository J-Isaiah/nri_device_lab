"use client";
import React from "react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/browser";

export default function Login() {
  const supabase = createClient();
  const [userEmail, setUserEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");

  async function sendOtp(): Promise<void> {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: userEmail,
      options: {
        emailRedirectTo: "google.com",
        shouldCreateUser: true,
      },
    });
  }
  async function verify() {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: userEmail,
      token: userOtp,
      type: "email",
    });
    console.log(session, error);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("Submitting form");
    e.preventDefault();
    await sendOtp();
  }

  async function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-white pl-10 pr-10 pt-10 rounded shadow">
        <div>
          <h1 className="text-black text-3xl text-center mb-10 font-bold">
            NRI DEVICE MANAGER
          </h1>
        </div>
        <div className="flex flex-col mb-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="userEmail" className="text-black mr-2">
              Enter Email:
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              value={userEmail}
              id="userEmail"
              onChange={handleInput}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Email"
            />
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 rounded-sm text-white p-2 font-bold"
              >
                Send One Time Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
