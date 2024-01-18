import { CartItem as TCartItem } from "@/components/features/cart/types"
import useSWR from "swr"
import { getProduct } from "@/lib/api"
import Image from "next/image"
import ShoppingCount from "@/components/features/cart/shopping-count"
import Icon from "@/components/common/icon"
import TrashIcon from "@/components/icons/trash"

type CartItemProps = {
	cartItem: TCartItem
	handleDelete: (tag: string) => void
}

export default function CartItem({ cartItem, handleDelete }: CartItemProps) {
	const { data } = useSWR(cartItem.tag, () =>
		getProduct({ productTag: cartItem.tag }),
	)
	if (!data?.ok) return <></>

	return (
		<div className='grid w-full grid-cols-1 gap-x-5 md:grid-cols-4'>
			<div className='flex justify-center border border-urbain-black px-8 py-4'>
				<Image
					width={119}
					height={109}
					src={data.data.product.thumbnail as string}
					alt={data.data.product.title}
				/>
			</div>

			<div className='flex items-center justify-center border border-urbain-black px-8 py-4 text-sm text-urbain-black'>
				{data.data.product.title}
			</div>

			<div className='flex justify-center border border-urbain-black px-8 py-4'>
				<ShoppingCount tag={cartItem.tag} />
			</div>
			<div className='flex justify-center border border-urbain-black px-8 py-4'>
				<button type='button' onClick={() => handleDelete(cartItem.tag)}>
					<Icon icon={<TrashIcon />} className='h-5 w-5 text-urbain-black' />
				</button>
			</div>
		</div>
	)
}