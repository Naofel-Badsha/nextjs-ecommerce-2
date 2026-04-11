import { AiOutlineDashboard} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { IoMdStarOutline} from "react-icons/io";
import { MdOutlinePermMedia} from "react-icons/md";
import { RiCoupon2Line} from "react-icons/ri";
import { GiClothes } from "react-icons/gi";


export const adminSidebarMenu = [
  {
    title: "Dashboard",
   url: "/admin/dashboard",
       icon: AiOutlineDashboard, 
  },
  {
    title: "Categories",
    url: "#",
    icon: BiCategory,
    submenu: [
      {
        title: "Add Category",
        url: "#",
      },
      {
        title: "All Category",
        url: "#",
      },
    ]
  },
  {
    title: "Products",
    url: "#",
    icon: GiClothes,
        submenu: [
      {
        title: "Add Product",
        url: "#",
      },
      {
        title: "All Variants",
        url: "#",
      },
      {
        title: "All Products",
        url: "#",
      },
      {
        title: "Product Variants",
        url: "#",
      },
    ]
  },
  {
    title: "Coupons",
    url: "#",
    icon: RiCoupon2Line,
        submenu: [
      {
        title: "Add Coupons",
        url: "#",
      },
      {
        title: "All Coupons",
        url: "#",
      },
    ]
  },
  {
    title: "Orders",
    url: "#",
    icon: MdOutlineShoppingBag,
  },
  {
    title: "Customers",
    url: "#",
    icon: LuUserRound,
  },
  {
    title: "Reviews",
    url: "#",
    icon: IoMdStarOutline,
  },
  {
    title: "Media",
    url: "#",
    icon: MdOutlinePermMedia,
  },

  ]