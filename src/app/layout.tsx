import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/app/nav-bar";
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
          <ThemeProvider attribute="class" defaultTheme="system">
            <NavBar />
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
