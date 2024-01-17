"use client"

import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import ChevronLeftIcon from "@/components/icons/chevron-left"
import ChevronRightIcon from "@/components/icons/chevron_right"
import React, { useEffect, useState } from "react"

type ParsedCart = Array<{
	tag: string
	count: number
}>

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

	const handleSyncCart = (count: number) => {
		const cart = localStorage.getItem("cart")

		if (!cart) {
			return localStorage.setItem("cart", JSON.stringify([{ tag, count }]))
		}

		try {
			const parsedCart = JSON.parse(cart) as ParsedCart

			const foundProduct = parsedCart.find(item => item.tag === tag)

			if (!foundProduct)
				return localStorage.setItem(
					"cart",
					JSON.stringify([...parsedCart, { tag, count }]),
				)

			return localStorage.setItem(
				"cart",
				JSON.stringify(
					parsedCart.map(item => (item.tag === tag ? { tag, count } : item)),
				),
			)
		} catch (e) {
			localStorage.removeItem("cart")
		}
	}

	const handleCountChange = (direction: 1 | -1) => {
		setCount(prev => {
			const updatedCount = Math.max(prev + direction)
			handleSyncCart(updatedCount)
			return updatedCount
		})
	}

	return (
		<div className='mt-6 flex w-full flex-col items-center gap-4 md:w-max md:flex-row'>
			<Box
				component='button'
				type='button'
				variant='secondary'
				className='w-full md:w-max'
				onClick={() => handleCountChange(1)}>
				<div className='flex w-full justify-center gap-x-4 md:w-max'>
					<span className='text-sm font-bold capitalize text-urbain-white'>
						ajouter
					</span>

					<Icon
						icon={<ShoppingCartIcon />}
						className='h-5 w-5 text-urbain-white'
					/>
				</div>
			</Box>

			{count > 0 && (
				<div className='flex w-full items-center justify-center gap-x-4 rounded-lg border border-gray-50 px-2 py-1 md:w-max'>
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
			)}
		</div>
	)
}
