"use client"

import Image from "next/image"
import ImagesSlider from "@/components/features/product/images-slider"
import React, { useState } from "react"
import { Product } from "@/components/features/product/types"
import FullModeImage from "@/components/features/product/is-full-mode"

type ImagesProps = {
	product: Product
}

export default function Images({ product }: ImagesProps) {
	const [selected, setSelected] = useState<string>()
	const selectedImage = selected ? selected : product.thumbnail
	const [isFullMode, setFullMode] = useState(false)

	return (
		<div className='flex flex-col items-start gap-5'>
			{isFullMode && (
				<FullModeImage
					title={product.title}
					image={selectedImage as string}
					close={() => setFullMode(false)}
				/>
			)}
			<button type='button' onClick={() => setFullMode(true)}>
				<Image
					src={selectedImage as string}
					alt={product.title}
					width={640}
					height={360}
				/>
			</button>

			<ImagesSlider
				images={product.images}
				changeHandler={image => setSelected(image)}
				title={product.title}
			/>
		</div>
	)
}
