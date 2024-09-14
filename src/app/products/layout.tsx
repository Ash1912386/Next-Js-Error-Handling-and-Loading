

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>There is a need to think about it</p>
      {children}
    </div>
  );
}
