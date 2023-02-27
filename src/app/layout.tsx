import "./globals.css";
import "server-only";
import SupabaseListener from "@/components/features/supabase-listener";
import SupabaseProvider from "@/components/features/supabase-provider";
import { createClient } from "@/lib/supabase-server";
import { Login } from "./LoginPage";
import { Navbar } from "@/components/features/Navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="pt-Br">
      <body className="dark:bg-zinc-900 dark:text-slate-50 h-screen vsc-initialized">
        {session?.access_token ? (
          <SupabaseProvider>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <Navbar />
            <main className="mx-auto max-w-7xl px-4">{children}</main>
          </SupabaseProvider>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
}
