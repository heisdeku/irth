import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TextRing } from "@/components/text-ring";
import localFont from "next/font/local";
const spaceGrotesk = Space_Grotesk({
    weight: ["600", "300", "400", "500", "700"],
    style: ["normal"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const clashGrotesk = localFont({
    src: "../public/ClashGrotesk-Variable.ttf",
    display: "swap",
    variable: "--font-clash-grotesk",
});

export const metadata: Metadata = {
    title: "365Sync",
    description: "Never Forget A Loved Ones Celebration Again With 365sync",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.className} ${clashGrotesk.className} bg-dark`}
            >
                <Header />
                <main className="my-8 px-4 relative ">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
