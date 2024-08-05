import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AOSInit } from "@/components/aos-init";
import { TooltipProvider } from "@/components/ui/tooltip";
import { constructMetadata } from '@/lib/construct-metadeta';
import Chatbot from "@/components/chatbot";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = constructMetadata()

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en suppressHydrationWarning">
      <head>
        {
          process.env.VERCEL_ENV === "production" ?
            <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.us-east.aws.tinybird.co" data-token={process.env.TINYBIRD_TOKEN}></script>
            :
            <></>
        }
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <AOSInit />
      <body
        id="root"
        className={cn(
          "min-h-screen bg-background dark:bg-foreground font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" forcedTheme="dark" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            {children}
            {process.env.VERCEL_ENV === "production" ? <Analytics /> : <></>}
          </TooltipProvider>
        </ThemeProvider>
        <Chatbot />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ''} />
    </html>
  );
}
