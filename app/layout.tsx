import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
