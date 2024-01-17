"use client"

import { useEffect, useState } from "react"
import { Cart as TCart } from "@/components/features/cart/types"
import CartItems from "@/components/features/cart/cart-items"

export default function Cart() {
	const [cart, setCart] = useState<TCart>([])

	useEffect(() => {
		const cart = localStorage.getItem("cart")

		if (cart) {
			try {
				setCart(
					JSON.parse(cart).map((item: any) => {
						return {
							tag: item.tag,
							count: item.count,
						}
					}) as TCart,
				)
			} catch (e) {
				localStorage.removeItem("cart")
			}
		}
	}, [])

	return (
		<div className='flex w-full flex-col items-center'>
			{cart.length > 0 && <CartItems cart={cart} />}
		</div>
	)
}
