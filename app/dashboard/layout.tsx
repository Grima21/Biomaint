import Header from "@/components/Header";
import Sidebar from "@/components/sideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 p-4 pb-[calc(5rem+env(safe-area-inset-bottom))] sm:p-6 sm:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
