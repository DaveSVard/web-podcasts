import { MobileNav } from "@/components/MobileNav";
import { LeftSideBar } from "@/components/templates/LeftSideBar";
import { RightSidebar } from "@/components/templates/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSideBar />
        <section className="flex flex-1 flex-col min-h-screen px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4 ">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="menuIcon" width={30} height={30} />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              Toast
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
