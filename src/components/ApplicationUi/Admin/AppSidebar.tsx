"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { adminSidebarMenu } from "@/lib/adminSiderbarMenu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LuChevronRight } from "react-icons/lu";
import { useState } from "react";

const AppSidebar = () => { 
  return (
    <Sidebar  >
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
          <Button className="cursor-pointer">
            <FaBars />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {adminSidebarMenu.map((menu, index) => (
            <Collapsible key={index} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild className="fot-semibold px-2 py-5 space-y-4">
                    <Link href={menu?.url} className="flex items-center gap-2">
                      <menu.icon className="text-lg" />
                      {menu.title}

                      {menu?.submenu && menu?.submenu.length > 0 && (
                        <LuChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {menu?.submenu && menu?.submenu.length > 0 && (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {menu.submenu.map((submenuItem, submenuIndex) => (
                        <SidebarMenuItem key={submenuIndex}>
                          <SidebarMenuButton asChild className="px-2 py-5">
                            <Link
                              href={submenuItem.url}
                              className="flex items-center gap-2"
                            >
                              {submenuItem.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
