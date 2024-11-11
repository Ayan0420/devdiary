import type { Metadata } from "next";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { ClientSessionProvider } from "@/app/client-session-provider";
import { auth } from "@/auth";

import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Link from "next/link";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "DevDiary",
    description: "Share your thoughts with the world",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <ClientSessionProvider session={session}>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {/* Add toaster */}
                        <Toaster position="bottom-right" />
                        <Nav />
                        {children}
                    </ThemeProvider>
                    <Footer />
                </body>
            </html>
        </ClientSessionProvider>
    );
}

const Footer = () => (
    <footer className="bg-primary-foreground dark:bg-primary-dark text-primary py-4">
        <div className="container mx-auto text-center">
            <div className="flex flex-col gap-2 sm:flex-row align-middle justify-between text-sm">
                <p>&copy; 2024 DevDiary. All rights reserved.</p>
                <Link className="underline underline-offset-4" href={"https://github.com/Ayan0420/devdiary"}>
                    Get the Source
                </Link>
                <p>
                    Created by{" "}
                    <a className="underline underline-offset-4" href="https://github.com/Ayan0420">
                        Dodong Ayan
                    </a>
                </p>
            </div>
        </div>
    </footer>
);
