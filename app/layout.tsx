import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const ibmPlexSansKr = localFont({
  src: [
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-Thin.ttf", weight: "100" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-ExtraLight.ttf", weight: "200" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-Light.ttf", weight: "300" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-Regular.ttf", weight: "400" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-Medium.ttf", weight: "500" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-SemiBold.ttf", weight: "600" },
    { path: "./../public/fonts/ibm-plex-sans-kr/IBMPlexSansKR-Bold.ttf", weight: "700" },
  ],
  variable: "--font-ibm-plex-sans-kr",
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Minsapoint Teacher",
  description: "Minsapoint for Teacher Accusation and Reward Points",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
