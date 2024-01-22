"use client"

import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ChevronLeftIcon from "@/components/icons/chevron-left"
import ChevronRightIcon from "@/components/icons/chevron_right"
import React, { useEffect, useState } from "react"
import handleSyncCart from "@/lib/sync-cart"

type ShoppingCountProps = { tag: string }

export default function ShoppingCount({ tag }: ShoppingCountProps) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const cart = localStorage.getItem("cart")

		if (cart) {
			try {
				const parsedCart = JSON.parse(cart)
				const products = parsedCart.reduce(
					(
						prev: Record<string, number>,
						curr: { tag: string; count: string },
					) => {
						if (!Object.keys(prev).includes(curr.tag))
							return { ...prev, [curr.tag]: Number.parseInt(curr.count) }
						return prev
					},
					{},
				)

				const count = products[tag]
				if (count) setCount(count)
			} catch (e) {
				localStorage.removeItem("cart")
			}
		}
	}, [tag])

	const handleCountChange = (direction: 1 | -1) => {
		setCount(prev => {
			const updatedCount = Math.max(prev + direction)
			handleSyncCart(tag, updatedCount)
			return updatedCount
		})
	}

	return (
		<div className='flex w-full items-center justify-center gap-x-4 px-2 py-1 md:w-max'>
			<Box
				className='p-2'
				type='button'
				component='button'
				onClick={() => handleCountChange(-1)}>
				<Icon
					icon={<ChevronLeftIcon />}
					className='h-4 w-4 text-urbain-black'
				/>
			</Box>
			<span className='font-bold'>{count}</span>
			<Box
				type='button'
				className='p-2'
				component='button'
				onClick={() => handleCountChange(1)}>
				<Icon
					icon={<ChevronRightIcon />}
					className='h-4 w-4 text-urbain-black'
				/>
			</Box>
		</div>
	)
}
