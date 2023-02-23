export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto max-w-7xl min-h-full">{children}</main>;
}
