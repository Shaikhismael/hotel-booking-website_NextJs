import LOGO from "@/public/bg.png"
import Image from "next/image";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  }
}

export default function Page() {
  return (
    <main className="mt-24">
      <Image src={LOGO} fill placeholder="blur" className="object-cover" alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </a>
      </div>
    </main>
  );
}

