import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-around items-center w-full sticky top-0  bg-nav z-10">
          <div>
            <Link href="/">
              <img src={"/next.svg"} className=" w-20 h-20 md:w-24 md:h-24 " />
            </Link>
          </div>
          <div className="">
            <Link href="/about">
              <button className="mr-4 text-lg font-light md:text-2xl md:font-normal">
                About
              </button>
            </Link>
            <Link href="/articles">
              <button className="mr-4 text-lg font-light md:text-2xl md:font-normal">
                Aretcal
              </button>
            </Link>
            <Link href="/posts">
              <button className="mr-4 text-lg font-light md:text-2xl md:font-normal">
                Posts
              </button>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
