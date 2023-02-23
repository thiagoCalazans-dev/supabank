import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className="dark:bg-zinc-900 dark:text-slate-50 h-screen vsc-initialized">
        {children}
      </body>
    </html>
  );
}
