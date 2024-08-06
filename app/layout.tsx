import type { Metadata } from "next";
import { inter } from "./components/ui/font";
import "./globals.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "grimgadge",
  description: "Decentralized platform that allows you to buy product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
        </body>
    </html>
  );
}
