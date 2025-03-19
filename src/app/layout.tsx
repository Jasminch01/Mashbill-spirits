import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/Appbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Mashbill Spirits | Premium Liquor Industry Opportunities",
  description:
    "Welcome to Mashbill Spirits, your gateway to unparalleled opportunities in the premium liquor industry. Explore exclusive spirits, craft distilleries, and investment opportunities in the world of fine liquors.",
  keywords: [
    "premium liquor",
    "craft spirits",
    "distillery investments",
    "fine whiskey",
    "luxury spirits",
    "Mashbill Spirits",
    "alcohol industry opportunities",
    "premium bourbon",
    "craft distillery",
    "spirits marketplace",
  ],
  openGraph: {
    title: "Mashbill Spirits | Premium Liquor Industry Opportunities",
    description:
      "Welcome to Mashbill Spirits, your gateway to unparalleled opportunities in the premium liquor industry. Explore exclusive spirits, craft distilleries, and investment opportunities in the world of fine liquors.",
    url: "",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Mashbill Spirits - Premium Liquor Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mashbill Spirits | Premium Liquor Industry Opportunities",
    description:
      "Welcome to Mashbill Spirits, your gateway to unparalleled opportunities in the premium liquor industry. Explore exclusive spirits, craft distilleries, and investment opportunities in the world of fine liquors.",
    images: [""],
  },
  authors: [
    {
      name: "Mashbill Spirits Team",
      url: "",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/mashbill-favicon.ico",
    shortcut: "/mashbill-favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/mashbill-favicon.ico" sizes="any" />
      <meta name="description" content={`${metadata.description}`} />
      <meta name="keywords" content={`${metadata.keywords}`} />
      <body className={`${poppins.className}`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
