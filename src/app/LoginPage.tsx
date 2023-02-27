import { FormLogin } from "@/components/features/forms/FormLogin";
import { createClient } from "@/lib/supabase-server";
import { Box } from "../components/ui/Box";

export async function Login() {
  const supabase = createClient();
  const { data: transactions } = await supabase.from("transactions").select();

  return (
    <main className="mx-auto flex justify-center items-center h-full  max-w-7xl ">
      <Box className="max-w-xs">
        <FormLogin />
      </Box>
    </main>
  );
}
