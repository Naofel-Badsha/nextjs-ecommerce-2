import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="border-b h-14 p-0 px-1">
        <div className="flex items-center justify-between gap-2 p-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/27jzrDyw/logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="font-medium">BuyNest</span>
          </Link>
          <Button className="cursor-pointer"><FaBars /></Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
