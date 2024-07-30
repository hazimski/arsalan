"use client";

import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HomePageMainNav } from "@/components/main-nav";
import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
// import styles from "@/styles/landing.module.css";
import "@/styles/landing.scss";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col marketing">
      <HomePageMainNav items={marketingConfig.mainNav} />
      {/* <Background /> */}
      {/* <header
        className={`z-40 ${
          isHeaderTransparent ? "bg-transparent" : "bg-white/75 backdrop-blur-lg border-b"
        } sticky inset-x-0 top-0 w-full transition-all duration-1000`}
      >
        <div className="container flex h-20 items-center justify-between py-6 ">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4 border shadow-md"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header> */}
      <main
        style={{ marginTop: -90 }}
        className="flex-1 z-10 elementor elementor-6053"
      >
        {children}
      </main>
      <Footer className="z-40" />
    </div>
  );
}
