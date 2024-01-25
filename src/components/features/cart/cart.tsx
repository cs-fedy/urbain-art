"use client"

import CartItems from "@/components/features/cart/cart-items"
import { useCart } from "@/components/features/cart/cart-context"

export default function Cart() {
	const { cart } = useCart()

	return (
		<div className='flex w-full flex-col items-center'>
			{cart.length > 0 && <CartItems cart={cart} />}
		</div>
	)
}
