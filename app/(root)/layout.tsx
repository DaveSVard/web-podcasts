export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p>Left SideBar</p>
        {children} 
        <p>Right SideBar</p>
      </main>
    </div>
  );
}
