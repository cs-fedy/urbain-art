import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import Cart from "@/components/features/cart/cart"

export default function CartPage() {
	return (
		<div className='mx-auto mt-28 w-10/12 lg:mb-10 lg:mt-48'>
			<h2 className='mb-16 flex w-full items-center justify-center gap-x-4'>
				<Icon
					icon={<ShoppingCartIcon />}
					className='h-[56px] w-[58px] text-urbain-black'
				/>

				<span className='text-center font-play-fair text-2xl leading-snug tracking-wider text-urbain-black md:text-3xl lg:text-4xl'>
					Demander un devis
				</span>
			</h2>

			<Cart />
		</div>
	)
}
