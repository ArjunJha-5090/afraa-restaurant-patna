import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afraa – Restaurant & Lounge | Patna",
  description: "Patna's most exclusive restaurant and lounge destination. Craft cocktails, elevated cuisine, unforgettable nights.",
  keywords: "restaurant, lounge, fine dining, Patna, luxury restaurant, craft cocktails, Afraa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
