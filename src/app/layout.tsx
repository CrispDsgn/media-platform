import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar, NavBarSkeleton } from "@/components/nav-bar";
import { Suspense } from "react";
import QueryProvider from "@/components/query-provider";

export const metadata: Metadata = {
  title: "Media Platform",
  description: "Watch any media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<NavBarSkeleton />}>
              <NavBar />
            </Suspense>
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
