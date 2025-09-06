import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ConvexClientProvider } from "@/ConvexClientProvider";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your trips with AI assistance",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <main>
            <ConvexClientProvider>
              {children}
            </ConvexClientProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
