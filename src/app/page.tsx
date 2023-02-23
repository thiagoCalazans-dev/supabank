import { H1 } from "@/components/typography/H1";
import { Label } from "@/components/typography/Label";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="mx-auto flex justify-center items-center h-full  max-w-7xl ">
      <Box className="max-w-xs">
        <form className="flex flex-col gap-1">
          <H1 className="uppercase text-center mb-6">supa-bank</H1>
          <Label>User</Label>
          <Input />
          <Label>Password</Label>
          <Input />
          <Button className="w-full mt-3">Entrar</Button>
        </form>
      </Box>
    </main>
  );
}
