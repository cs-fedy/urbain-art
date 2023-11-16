"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import SliderDot from "./slider_dot"
import { Slides } from "./types"

const MAX_SLIDES = 8
const SLIDING_INTERVAL = 2000

type WrappedSliderProps = {
	slides: Slides
}

export default function WrappedSlider({ slides }: WrappedSliderProps) {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const sliderInterval = setInterval(
			() => setCurrentSlide(prev => (prev + 1) % slides.length),
			SLIDING_INTERVAL,
		)

		return () => {
			clearInterval(sliderInterval)
		}
	}, [slides.length])

	return (
		<header className='relative h-max w-full overflow-hidden pt-[4.75rem] lg:h-screen lg:pt-0'>
			<div className='absolute inset-0 z-0 bg-urbain-black/50' />
			<Image
				src={slides[currentSlide].slide as string}
				alt={`slide ${currentSlide + 1}`}
				className='aspect-video object-cover'
				width={1920}
				height={1080}
			/>

			<div className='absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center space-x-3'>
				{slides.slice(0, MAX_SLIDES).map((_, index) => (
					<SliderDot isCurrent={index === currentSlide} key={index} />
				))}
			</div>
		</header>
	)
}
