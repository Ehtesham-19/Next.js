import { Geist } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Full Stack",
  // default: "Full Stack",
  description: "A full stack web application built with Next.js",
  icons:{
    icon:"./public/favicon.png",
  }
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}