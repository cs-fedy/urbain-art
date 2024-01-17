import { CartItem as TCartItem } from "@/components/features/cart/types"
import useSWR from "swr"
import { getProduct } from "@/lib/api"

type CartItemProps = { cartItem: TCartItem }

export default function CartItem({ cartItem }: CartItemProps) {
	const { data } = useSWR(cartItem.tag, () =>
		getProduct({ productTag: cartItem.tag }),
	)
	console.log(data)

	return (
		<div className='grid w-full grid-cols-4 gap-x-5 border border-urbain-black px-8 py-4'></div>
	)
}
