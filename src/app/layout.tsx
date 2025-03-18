import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/Appbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700" , "300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Mashbill Spirits",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
