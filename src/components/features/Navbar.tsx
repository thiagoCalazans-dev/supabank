"use client";
import { createClient } from "@/lib/supabase-browser";
import { SignOut } from "phosphor-react";
import { H1 } from "../typography/H1";
import { Button } from "../ui/Button";

export function Navbar() {
  const supabase = createClient();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <header className="w-full  py-2  bg-emerald-800  ">
      <nav className="mx-auto max-w-[90rem] flex items-center justify-between">
        <H1 className="uppercase text-center w-fit  p-3 border border-emerald-800 ">
          supabank
        </H1>
        <Button
          className="text-3xl"
          variant="default"
          type="button"
          onClick={signOut}
        >
          <SignOut />
        </Button>
      </nav>
    </header>
  );
}
