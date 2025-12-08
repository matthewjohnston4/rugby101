import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desk of M: A Beginner's Guide to Rugby",
  description: "Learn the basics of rugby, including laws, positions, and gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/muv6feu.css"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
