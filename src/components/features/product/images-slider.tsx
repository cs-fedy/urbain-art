"use client"

import { Image as TImage } from "@/utils/types"
import Image from "next/image"
import Icon from "@/components/common/icon"
import ArrowLongLeft from "@/components/icons/arrow_long_left"
import ArrowLongRight from "@/components/icons/arrow_long_right"
import { useState } from "react"

type ImagesSliderProps = {
	changeHandler: (image: string) => void
	images: Array<TImage>
	title: string
}

const itemsPerWindow = 3

export default function ImagesSlider({
	images,
	title,
	changeHandler,
}: ImagesSliderProps) {
	const [offset, setOffset] = useState(0)

	const handleChangeOffset = (direction: 1 | -1) =>
		setOffset(prev => {
			if (direction === -1) {
				const newOffset = prev - itemsPerWindow
				if (newOffset < 0) return 0
				return newOffset
			}

			if (direction === 1) {
				const newOffset = prev + itemsPerWindow
				if (newOffset < images.length) return newOffset
				return prev
			}

			return prev
		})

	return (
		<div className='relative grid w-full grid-cols-3 items-center gap-2'>
			{images.slice(offset, offset + itemsPerWindow).map((image, index) => (
				<button
					type='button'
					onClick={() => changeHandler(image as string)}
					key={image as string}>
					<Image
						src={image as string}
						className='aspect-square object-cover'
						alt={`${title}_${index}`}
						width={203}
						height={186}
					/>
				</button>
			))}

			{images.length > 3 && (
				<div className='absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between lg:translate-y-0'>
					<button
						onClick={() => handleChangeOffset(-1)}
						className='flex h-10 w-10 items-center justify-center rounded-full bg-urbain-black hover:bg-slate-900'>
						<Icon
							icon={<ArrowLongLeft />}
							className='h-4 w-4 text-urbain-white'
						/>
					</button>

					<button
						onClick={() => handleChangeOffset(1)}
						className='flex h-10 w-10 items-center justify-center rounded-full border border-urbain-black bg-urbain-white hover:bg-slate-100'>
						<Icon icon={<ArrowLongRight />} className='h-4 w-4' />
					</button>
				</div>
			)}
		</div>
	)
}
