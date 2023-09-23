import { Navbar, Sidebar } from "@/components";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen py-2 px-2 bg-[#F1F5F9] w-full gap-2">
            <div className="inset-0 ">
                <Sidebar />
            </div>
            <main className="w-full ps-1">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
