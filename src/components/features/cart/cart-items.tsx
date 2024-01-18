import { Cart } from "@/components/features/cart/types"
import CartItem from "@/components/features/cart/cart-item"
import { submitContactForm } from "@/lib/api"
import ContactForm from "@/components/features/contact/contact_form/contact-form"

type CartItemsProps = {
	cart: Cart
	handleDelete: (tag: string) => void
}
export default function CartItems({ cart, handleDelete }: CartItemsProps) {
	return (
		<div className='flex w-full flex-col items-center gap-y-5'>
			<div className='hidden w-full grid-cols-4 gap-x-5 md:grid'>
				<div className='flex w-full justify-center bg-urbain-black px-8 py-4 text-sm text-urbain-white'>
					Image
				</div>
				<div className='flex w-full justify-center bg-urbain-black px-8 py-4 text-sm text-urbain-white'>
					Produit
				</div>
				<div className='flex w-full justify-center bg-urbain-black px-8 py-4 text-sm text-urbain-white'>
					Quantité
				</div>
				<div className='flex w-full justify-center bg-urbain-black px-8 py-4 text-sm text-urbain-white'></div>
			</div>

			<div className='flex w-full flex-col items-center gap-5'>
				{cart.map(item => (
					<CartItem
						handleDelete={handleDelete}
						cartItem={item}
						key={item.tag}
					/>
				))}
			</div>

			<div className='w-3/6'>
				<ContactForm submitContactFormAction={submitContactForm} />
			</div>
		</div>
	)
}
