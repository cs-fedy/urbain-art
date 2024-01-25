"use client"

import Link from "next/link"
import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import { useCart } from "@/components/features/cart/cart-context"

export default function ShoppingIcon() {
	const { cart } = useCart()
	const count = cart.reduce((prev, curr) => prev + curr.count, 0)

	return (
		<Link href='/cart'>
			<div className=' flex items-center gap-2'>
				<Icon
					icon={<ShoppingCartIcon />}
					className='h-[26px] w-[27px] text-urbain-white lg:h-[34px] lg:w-[35px]'
				/>

				{count !== 0 && (
					<span className='flex h-7 w-7 items-center justify-center rounded-full bg-urbain-orange text-urbain-white'>
						{count > 9 ? "+9" : count}
					</span>
				)}
			</div>
		</Link>
	)
}
