import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 relative">
      <div className="w-[96%] h-[500px] lg:w-[1000px] backdrop-blur lg:h-[500px] rounded-xl border hover:backdrop-blur-sm transition-all duration-200">
        <div className="flex flex-col items-center p-8 w-full">
          <h1 className="text-3xl lg:text-6xl font-extrabold">uplifter</h1>
          <p className="text-xl lg:text-2xl mt-10 text-center">
            a place that helps developer to build strong profile
          </p>
          <Link
            href={"/pages/dashboard"}
            className="mt-40 backdrop-blur-2xl p-4 border rounded-xl font-extrabold hover:bg-white hover:backdrop-blur-none hover:text-black transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-screen h-16 backdrop-blur">
        <div className="h-full flex justify-center items-center">
          Made with ❤️🚀 by{" "}
          <a
            className="ml-1 underline transition duration-150 hover:scale-105"
            href="https://twitter.com/2xprathamesh"
            target="blank"
          >
            prathamesh
          </a>
        </div>
      </footer>
    </main>
  )
}
