import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import AboutMe from "@/components/aboutMe";
import Accounts from "@/components/accounts";

export const metadata: Metadata = {
  title: "Vadam - RBA",
  description: "Presentación para la comunidad de roleplay",
  icons: {
    icon: "/Icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <section className="sm:flex">
                <div className="flex flex-col w-full justify-between">
                  <AboutMe />
                  <Accounts />
                </div>
                {children}
              </section>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
