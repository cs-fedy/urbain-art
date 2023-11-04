"use client"

import slideEight from "@/../public/images/slide_eight.jpg"
import slideFive from "@/../public/images/slide_five.jpg"
import slideFour from "@/../public/images/slide_four.jpg"
import slideOne from "@/../public/images/slide_one.jpg"
import slideSeven from "@/../public/images/slide_seven.jpg"
import slideSix from "@/../public/images/slide_six.jpg"
import slideThree from "@/../public/images/slide_three.jpg"
import slideTwo from "@/../public/images/slide_two.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"
import SliderDot from "./slider_dot"

const images = [
	slideOne,
	slideTwo,
	slideThree,
	slideFour,
	slideFive,
	slideSix,
	slideSeven,
	slideEight,
]

const MAX_SLIDES = 8
const SLIDING_INTERVAL = 1300

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const sliderInterval = setInterval(
			() => setCurrentSlide(prev => (prev + 1) % images.length),
			SLIDING_INTERVAL,
		)

		return () => {
			clearInterval(sliderInterval)
		}
	}, [])

	return (
		<header className='relative h-screen w-full overflow-hidden'>
			<div className='absolute inset-0 z-0 bg-urbain-black/50' />
			<Image
				src={images[currentSlide]}
				alt={`slide ${currentSlide + 1}`}
				className='aspect-video object-cover'
			/>

			<div className='absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center space-x-3'>
				{images.slice(0, MAX_SLIDES).map((_, index) => (
					<SliderDot isCurrent={index === currentSlide} key={index} />
				))}
			</div>
		</header>
	)
}
