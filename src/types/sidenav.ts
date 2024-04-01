export type SideNavItem = {
  name: string;
  link: string;
  image: string;
  subitem?: boolean;
  subItems?: SideNavItem[];
};
