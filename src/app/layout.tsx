import Categories from "@/components/features/categories/categories"
import Footer from "@/components/features/footer"
import Navbar from "@/components/features/navbar/navbar"
import cn from "@/utils/cn"
import type { Metadata } from "next"
import { Montserrat, Playfair } from "next/font/google"
import { PropsWithChildren } from "react"
import "./globals.css"

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
})

const playfair = Playfair({
	subsets: ["latin"],
	variable: "--font-play-fair",
})

export const metadata: Metadata = {
	title: "Urbain Art",
	icons: { icon: "/images/favicon.ico" },
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body className={cn(playfair.variable, montserrat.variable)}>
				<Navbar />
				<Categories />
				{children}
				<Footer />
			</body>
		</html>
	)
}
