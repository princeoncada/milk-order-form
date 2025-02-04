import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milk Order Form",
  description: "Order Form for Milk Bulk Orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        {children}
      </body>
    </html>
  );
}
