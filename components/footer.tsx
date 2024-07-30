import * as React from "react";
import Link from "next/link";
import Image from "next/image";

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  simpleFooter?: boolean;
}
export function Footer({}: SiteFooterProps) {
  return (
    <footer
      style={{ backgroundColor: "rgb(9 11 22/1)" }}
      className="flex flex-col lg:px-10 px-4 py-24"
    >
      <div className="flex flex-col gap-16 hug md:flex-row">
        <div className="flex relative overflow-hidden [&>*:not(.data-rf-layer)]:z-10 flex-col gap-4 basis-2/5">
        <Image
            style={{ width: 40, margin: 0 }}
            src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/favicon_chatpad_large.png"
            width={40}
            height={24}
            alt="logo"
          />
        </div>
        <div className="flex relative overflow-hidden [&>*:not(.data-rf-layer)]:z-10 flex-col basis-3/5">
          <div className="flex flex-col gap-4 grow">
            <div className="flex flex-row justify-between gap-4 [&_a]:no-underline">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-normal text-neutral-50">
                  Product
                </span>
                <div className="flex flex-col">
                  <button className="inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 underline-offset-4 hover:underline text-sm text-neutral-400 p-0 h-8 justify-start font-light">
                    <Link
                      className="text-sm font-light text-neutral-400"
                      href="/"
                    >
                      Pricing
                    </Link>
                  </button>
                  <button className="inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 underline-offset-4 hover:underline text-sm text-neutral-400 p-0 h-8 justify-start font-light">
                    <Link
                      className="text-sm font-light text-neutral-400"
                      href="/"
                    >
                      Recipes
                    </Link>
                  </button>
                  <button className="inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 underline-offset-4 hover:underline text-sm text-neutral-400 p-0 h-8 justify-start font-light">
                    <Link
                      className="text-sm font-light text-neutral-400"
                      href="/"
                    >
                      Book a demo
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-normal text-neutral-50">
                  Company
                </span>
                <div className="flex flex-col">
                  <button className="inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 underline-offset-4 hover:underline text-sm text-neutral-400 p-0 h-8 justify-start font-light">
                    <Link
                      className="text-sm font-light text-neutral-400"
                      href="/"
                    >
                      Terms of Service
                    </Link>
                  </button>
                  <button className="inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 underline-offset-4 hover:underline text-sm text-neutral-400 p-0 h-8 justify-start font-light">
                    <Link
                      className="text-sm font-light text-neutral-400"
                      href="/"
                    >
                      {" "}
                      Privacy{" "}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
