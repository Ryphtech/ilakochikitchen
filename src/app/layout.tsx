import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ila Kochi - Authentic Flavors of the Coast",
  description: "Experience nature-inspired dining celebrating Kerala's coastal heritage, where every dish tells a story of the sea and soil.",
  metadataBase: new URL('https://ilakochikitchen.vercel.app'), // Update this to your actual domain if different
  openGraph: {
    title: "Ila Kochi - Authentic Flavors of the Coast",
    description: "Experience nature-inspired dining celebrating Kerala's coastal heritage.",
    url: 'https://ilakochikitchen.vercel.app',
    siteName: 'Ila Kochi Kitchen',
    images: [
      {
        url: '/icon.png', // Using the icon as the preview image
        width: 512,
        height: 512,
        alt: 'Ila Kochi Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ila Kochi Kitchen",
    description: "Authentic Coastal Flavors of Kerala",
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className={`${workSans.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
