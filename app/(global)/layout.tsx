import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppWrappers from "../components/AppWrappers";
import localFont from "next/font/local";

const pelak = localFont({
  src: [
    {
      path: "../../public/fonts/PelakFA-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PelakFA-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PelakFA-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PelakFA-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PelakFA-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={pelak.className}>
        <NextUIProvider locale="fa-AF" className="bg-gray-50">
          <Header />
          <AppWrappers>{children}</AppWrappers>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}