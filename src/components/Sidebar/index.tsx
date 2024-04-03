import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
} from "lucide-react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { SideNavItems } from "../../../constants/constants";
import { Button } from "../ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
const logo = "/logo-no-bg.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = localStorage.getItem("sidebar-expanded");

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-99999 flex h-screen w-60 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-1.5 lg:py-1.5">
        <Link href="/">
          <Image width={176} height={32} src={logo} alt="Logo" priority />
        </Link>

        <Button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="flex items-center justify-center border p-1 text-white lg:hidden"
          variant="outline"
          size="icon"
        >
          <PanelLeftClose className="h-10 w-10" />
        </Button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className=" flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mb-10 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {SideNavItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.subItems ? (
                    <SidebarLinkGroup
                      activeCondition={
                        pathname === item.link || pathname.includes(item.link)
                      }
                    >
                      {(handleClick, open) => (
                        <React.Fragment>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                              (pathname === item.link ||
                                pathname.includes(item.link)) &&
                              "bg-graydark dark:bg-meta-4"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={18}
                              height={18}
                            />

                            <div className="text-white">{item.name}</div>
                            {/* ... (chevron icon) */}
                            {open ? (
                              <ChevronUp className="text-white" />
                            ) : (
                              <ChevronDown className="text-white" />
                            )}
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${
                              !open && "hidden"
                            }`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                              {item.subItems?.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.link}
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                      pathname === child.link && "text-white"
                                    }`}
                                  >
                                    <Image
                                      src={child.image}
                                      alt={child.name}
                                      width={18}
                                      height={18}
                                    />
                                    <div className="text-white">
                                      {child.name}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      )}
                    </SidebarLinkGroup>
                  ) : (
                    <li>
                      <Link
                        href={item.link}
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === item.link && "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={18}
                          height={18}
                        />
                        <div className="text-white">{item.name}</div>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
