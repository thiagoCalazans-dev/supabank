"use client";
import { H1 } from "@/components/typography/H1";
import { Label } from "@/components/typography/Label";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export function FormLogin() {
  const supabase = createClient();
  const router = useRouter();

  async function handleSubmitLogin(e: any) {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });
    router.refresh();
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmitLogin}>
      <H1 className="uppercase text-center mb-6">supa-bank</H1>
      <Label>User</Label>
      <Input />
      <Label>Password</Label>
      <Input />
      <Button className="w-full mt-3">Entrar</Button>
    </form>
  );
}
