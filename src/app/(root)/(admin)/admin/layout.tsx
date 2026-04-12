import AppSidebar from "@/components/ApplicationUi/Admin/AppSidebar";
import DashboardTopbar from "@/components/ApplicationUi/Admin/DashboardTopbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="md:w-[calc(100vw-16rem)] w-full">
          <div className="min-h-[calc(100vh-40px)] pb-10">
            <DashboardTopbar />
            <div className="p-5">{children}</div>
          </div>

          <div className="border-t h-[40px] flex items-center justify-center bg-gray-50 text-sm">
            &copy; {new Date().getFullYear()} BuyNest. All rights reserved.
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
