import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});
export const metadata = {
  title:
    "Shubh Om Kanchan | Workflow Automation, AppSheet & Analytics Portfolio",

  description:
    "Portfolio showcasing workflow automation systems, AppSheet applications, Google Apps Script solutions, reporting dashboards, operational intelligence systems and AI-enabled analytics projects.",

  keywords: [
    "workflow automation",
    "AppSheet developer",
    "Google Apps Script",
    "automation portfolio",
    "analytics dashboard",
    "reporting automation",
    "no code developer",
    "operations automation",
    "data analytics projects",
    "business process automation"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}