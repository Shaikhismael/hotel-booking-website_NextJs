import {Poppins} from "next/font/google"

import "@/app/_styles/globals.css"
import Header from "./_components/Header";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-950 text-primary-100 min-h-screen ${poppins.className} flex flex-col relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  )
}