import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
});
import "./globals.css";



export const metadata: Metadata = {
  title: "DakojuLab – Home Server Automation",
  description:
    "Kelola, pantau, dan amankan home server Anda dengan Proxmox, Zabbix, dan Wazuh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
