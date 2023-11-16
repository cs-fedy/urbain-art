import About from "@/components/features/about"
import Experience from "@/components/features/experience"
import Newsletter from "@/components/features/newsletter/newsletter"
import PopularProducts from "@/components/features/popular_products/popular_products"
import Slider from "@/components/features/popular_products_slider/slider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function HomePage() {
	return (
		<main className='w-full'>
			<Slider />
			<About />
			<Experience />
			<PopularProducts />
			<Newsletter />
			<ToastContainer />
		</main>
	)
}
