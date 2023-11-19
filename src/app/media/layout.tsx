export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container py-6">{children}</main>;
}
