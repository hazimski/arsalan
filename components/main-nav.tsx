"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  isDashboard?: boolean
}

export const HomePageMainNav: React.FC<MainNavProps> = ({isDashboard=false}) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="c-navbar t-mode--dark ">
      <div className="c-navbar__content t-mode--dark">
        <Link href={isDashboard ? "/dashboard" : "/"} className="c-navbar__logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Image alt="Logo"  style={{ marginRight: '10px' }}  width="30" height="24" src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/Favicon)chatpad_small.png" />
      <span style={{ color: 'white', fontWeight: 'bold', fontSize:'18px' }}>Chatpad</span>
    </Link>
        <button className="c-navbar__button v--dark-mode">
          <span onClick={onToggleMenu} hidden={isMenuOpen}>
            Menu
          </span>
          <span onClick={onToggleMenu} hidden={!isMenuOpen}>
            Close
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 16"
            width={20}
            className="u-ml-xs"
          >
            <g
              fill="none"
              stroke="#1b1b20"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M1 3.5h15" className="c-navbar__button__bar" />
              <path d="M1 8h15" className="c-navbar__button__bar" />
              <path d="M1 12.5h15" className="c-navbar__button__bar" />
            </g>
          </svg>
        </button>
        <nav
          className="c-menu t-mode--dark v--dark-mode lg:u-ml-2xl"
          hidden={!isMenuOpen}
        >
          <ul>
            <li data-target="menu.root">
              <a className="c-menu__item v--top" href="#features">
                Features
              </a>
            </li>
            <li data-target="menu.root">
              <a
                className="c-menu__item v--top"
                href="#pricing"
                data-target="menu.top"
              >
                Pricing
              </a>
            </li>
          </ul>
          <div className="v--only-mobile u-p-lg u-mt-auto u-mb-0">
            <p className="u-text-center u-text-white">
              <Link onClick={onToggleMenu} href={process.env.NEXT_PUBLIC_SUB_DOMAIN_URL+"/login"}>
                Already a customer?{" "}
                <span className="u-text-primary">Log in</span>
              </Link>
            </p>
          </div>
        </nav>
        <div className="c-navbar__actions">
          <Link
            href={process.env.NEXT_PUBLIC_SUB_DOMAIN_URL+"/login"}
            className="c-btn v--transparent u-text-white hover:u-bg-white hover:u-text-black v--sm"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export function MainNav({ items, children, isDashboard=false }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={isDashboard ? "/dashboard": "/"} className="hidden items-center space-x-2 md:flex">
      <Image alt="Logo"  style={{ marginRight: '10px' }}  width="30" height="24" src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/Favicon)chatpad_small.png" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Image alt="Logo"  width="30" height="24" src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/Favicon)chatpad_small.png" />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
