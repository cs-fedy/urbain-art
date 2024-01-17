"use client"

import { Product } from "@/components/features/product/types"
import React from "react"
import Box from "@/components/common/box"
import Images from "@/components/features/product/images"
import ShoppingCount from "@/components/features/product/shopping-count"

type ProductDetailsProps = { product: Product }

export default function ProductDetails({ product }: ProductDetailsProps) {
	return (
		<div className='mx-auto mt-24 w-10/12 lg:mb-10 lg:mt-48'>
			<div className='flex w-full flex-col items-start gap-10 py-8 lg:flex-row lg:px-16'>
				<Images product={product} />

				<div className='flex w-full flex-col items-start lg:w-max'>
					<h2 className='font-play-fair text-3xl font-bold leading-snug tracking-wider text-urbain-black md:text-4xl lg:max-w-2xl lg:text-left lg:text-5xl'>
						{product.title}
					</h2>

					{product.dimensions && (
						<span className='mt-8 flex flex-col font-montserrat text-lg text-urbain-black md:text-xl lg:text-2xl'>
							{product.dimensions.split("\n").map((line, index) => (
								<span className='mb-4' key={index}>
									{line}
								</span>
							))}
						</span>
					)}

					{product.description && (
						<>
							<h3 className='mt-12 font-montserrat text-lg font-bold text-urbain-black md:text-xl lg:text-2xl'>
								Descrption du produit :
							</h3>

							<p className='mt-4 flex max-w-xl flex-col font-montserrat text-lg leading-tight text-urbain-black md:text-xl lg:text-2xl'>
								{product.description}
							</p>
						</>
					)}

					<ShoppingCount tag={product.tag} />

					{product.catalog && (
						<Box
							download
							component='a'
							variant='primary'
							className='mt-6 flex w-full justify-center md:w-max'
							href={product.catalog}>
							<span className='text-sm font-bold capitalize text-urbain-white'>
								Télécharger le catalogue
							</span>
						</Box>
					)}
				</div>
			</div>
		</div>
	)
}
