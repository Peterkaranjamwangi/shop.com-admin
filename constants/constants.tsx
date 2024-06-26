import { SideNavItem } from "@/types/sidenav";

export const SideNavItems: SideNavItem[] = [
  {
    name: "Dashboard",
    link: "/",
    image: "/dashboard.png",
    subitem: false,
  },
  {
    name: "Catalogue",
    link: "/catalogue",
    image: "/catalogue.png",
    subitem: true,
    subItems: [
      {
        name: "Attributes",
        link: "/catalogue/attributes",
        image: "/attributes.png",
      },
      {
        name: "Banners",
        link: "/catalogue/banners",
        image: "/banners.png",
      },
      {
        name: "Categories",
        link: "/catalogue/categories",
        image: "/categories.png",
      },
      {
        name: "Coupons",
        link: "/catalogue/coupons",
        image: "/coupon.png",
      },
      {
        name: "Products",
        link: "/catalogue/products",
        image: "/products.png",
      },
    ],
  },
  {
    name: "Customers",
    link: "/customers",
    image: "/customers.png",
    subitem: false,
  },
  {
    name: "Vendors",
    link: "/vendors",
    image: "/vendors.png",
    subitem: false,
  },
  {
    name: "Markets",
    link: "/markets",
    image: "/markets.png",
    subitem: false,
  },
  {
    name: "Orders",
    link: "/orders",
    image: "/orders.png",
    subitem: false,
  },
  {
    name: "Staff",
    link: "/staff",
    image: "/staff.png",
    subitem: false,
  },
  {
    name: "Wallet",
    link: "/wallet",
    image: "/wallet.png",
    subitem: false,
  },

  {
    name: "Online Store",
    link: "/online-store",
    image: "/online-store.png",
    subitem: true,
    subItems: [
      {
        name: "Submenu A",
        link: "/online-store/submenu",
        image: "/submenu.png",
      },
      {
        name: "Submenu B",
        link: "/online-store/submenu",
        image: "/submenu.png",
      },
    ],
  },

  {
    name: "Profile",
    link: "/profile",
    image: "/profile.png",
    subitem: false,
  },

  {
    name: "Tables",
    link: "/tables",
    image: "/tables.png",
    subitem: false,
  },
  {
    name: "Settings",
    link: "/settings",
    image: "/settings.png",
    subitem: false,
  },

  {
    name: "Authentication",
    link: "/auth",
    image: "/authentication.png",
    subitem: true,
    subItems: [
      {
        name: "Sign In",
        link: "/auth/signin",
        image: "/signin.png",
      },
      {
        name: "Sign Up",
        link: "/auth/signup",
        image: "/signup.png",
      },
    ],
  },
];
