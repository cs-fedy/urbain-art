import { listProductsSlides } from "@/lib/api"
import WrappedSlider from "./wrapped_slider"

export default async function Slider() {
	const slides = await listProductsSlides()

	if (!slides.ok) return <></>
	return <WrappedSlider slides={slides.data.slides} />
}
