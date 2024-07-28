import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { neobrutalism } from "@clerk/themes";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GO LANGUIFY",
  description: "Find freelance translation jobs that match your skills and apply to start working.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: neobrutalism,
      elements: {
        formButtonPrimary: "bg-[#14a800]/80  hover:bg-[#14a800] hover:scale-105",
        menuButton: "text-[#14a800]",
        profileSectionPrimaryButton: "text-[#14a800]",
        navbarButton: "text-[#14a800]",
      }
    }}  >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <link rel="icon" href="/public/favicon.png" sizes="any" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>


            </SignedOut>
            <SignedIn>


            </SignedIn>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
