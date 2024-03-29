import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import { Providers } from "@/libs/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">

      <body className={inter.className}>
        <Header session={session} />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
