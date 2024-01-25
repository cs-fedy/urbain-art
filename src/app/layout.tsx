import Footer from "@/components/features/footer"
import Navbar from "@/components/features/navbar/navbar"
import cn from "@/utils/cn"
import type { Metadata } from "next"
import { Montserrat, Playfair } from "next/font/google"
import { PropsWithChildren } from "react"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CartProvider from "@/components/features/cart/cart-context"

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
		<CartProvider>
			<html lang='en'>
				<body className={cn(playfair.variable, montserrat.variable)}>
					<div className='flex min-h-screen w-full flex-col items-center'>
						<Navbar />
						<div className='w-full grow'>{children}</div>
						<Footer />
						<ToastContainer />
					</div>
				</body>
			</html>
		</CartProvider>
	)
}
