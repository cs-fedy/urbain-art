"use client"

import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import Image from "next/image"
import { Product } from "./types"
import Link from "next/link"
import { useCart } from "@/components/features/cart/cart-context"

type ProductItemProps = { product: Product }

export default function ProductItem({ product }: ProductItemProps) {
	const { getItem, saveItem } = useCart()
	const item = getItem(product.tag)
	const count = item?.count ?? 0

	const handleCountChange = (direction: 1 | -1) => {
		const updatedCount = Math.max(count + direction)
		saveItem({ tag: product.tag, count: updatedCount, id: product.id })
	}

	return (
		<div className='flex w-full flex-col items-start overflow-hidden rounded-lg bg-white shadow-sm'>
			<div className='aspect-video overflow-hidden'>
				<Image
					src={product.thumbnail as string}
					alt={product.title}
					width={509}
					height={496}
				/>
			</div>

			<div className='flex w-full flex-col items-center space-y-6 p-4 font-medium'>
				<div className='flex w-full flex-col items-start space-y-2'>
					<Link href={product.link}>
						<h3 className='font-montserrat text-lg text-urbain-black md:text-xl lg:text-2xl'>
							{product.title}
						</h3>
					</Link>
					<span className='text-sm text-urbain-black '>
						{product.dimensions?.split("\n")[0]}
					</span>
				</div>
				<div className='flex w-full justify-end'>
					<Box
						onClick={() => handleCountChange(1)}
						component='button'
						variant='secondary'>
						<span>Ajouter</span>
						<Icon
							icon={<ShoppingCartIcon />}
							className='h-4 w-4 text-urbain-white'
						/>
					</Box>
				</div>
			</div>
		</div>
	)
}
