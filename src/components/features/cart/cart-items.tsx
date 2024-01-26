import { Cart } from "@/components/features/cart/types"
import CartItem from "@/components/features/cart/cart-item"
import Input from "@/components/common/input"
import TextArea from "@/components/common/text-area"
import Box from "@/components/common/box"
import { useFormState, useFormStatus } from "react-dom"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import submitCartAction from "@/components/features/cart/action"
import { useCart } from "@/components/features/cart/cart-context"

const initialValue = {
	email: null,
	phoneNumber: null,
	fullName: null,
	topic: null,
	message: null,
}

type CartItemsProps = { cart: Cart }
export default function CartItems({ cart }: CartItemsProps) {
	const { pending } = useFormStatus()
	const [state, action] = useFormState(submitCartAction, initialValue)
	const formRef = useRef<HTMLFormElement>(null)
	const { clear } = useCart()

	useEffect(() => {
		if (state.ok) {
			toast.success("Demande envoyée avec succès", {
				position: "top-right",
				style: { backgroundColor: "#000000" },
			})
		}
	}, [state])

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
					<CartItem cartItem={item} key={item.tag} />
				))}
			</div>

			<div className='w-full lg:w-3/6'>
				<form
					ref={formRef}
					action={data => {
						data.append(
							"cartItems",
							JSON.stringify(
								cart.map(item => {
									return { productId: item.id, count: item.count }
								}),
							),
						)
						action(data)
						formRef.current?.reset()
						clear()
					}}
					className='flex w-full flex-col items-start gap-12'>
					<div className='flex w-full flex-col items-start'>
						<label className='text-sm text-urbain-white' htmlFor='fullName'>
							Nom et prénom
						</label>
						<Input
							error={
								state.ok === false && state.error.name === "fullName"
									? state.error.message
									: ""
							}
							className='bg-urbain-white focus:bg-urbain-white'
							id='full-name'
							placeholder='Nom'
							name='fullName'
							type='text'
						/>
					</div>
					<div className='flex w-full flex-col items-start'>
						<label className='text-sm text-urbain-white' htmlFor='email'>
							Email
						</label>
						<Input
							error={
								state.ok === false && state.error.name === "email"
									? state.error.message
									: ""
							}
							className='bg-urbain-white focus:bg-urbain-white'
							id='email'
							placeholder='Email'
							name='email'
							type='email'
						/>
					</div>
					<div className='flex w-full flex-col items-start'>
						<label className='text-sm text-urbain-white' htmlFor='phoneNumber'>
							Téléphone
						</label>
						<Input
							error={
								state.ok === false && state.error.name === "phoneNumber"
									? state.error.message
									: ""
							}
							className='bg-urbain-white focus:bg-urbain-white'
							id='phone-number'
							placeholder='Téléphone'
							name='phoneNumber'
							type='number'
						/>
					</div>
					<div className='flex w-full flex-col items-start'>
						<label className='text-sm text-urbain-white' htmlFor='topic'>
							Sujet
						</label>
						<Input
							error={
								state.ok === false && state.error.name === "topic"
									? state.error.message
									: ""
							}
							className='bg-urbain-white focus:bg-urbain-white'
							id='topic'
							placeholder='Sujet'
							name='topic'
							type='text'
						/>
					</div>
					<div className='flex w-full flex-col items-start'>
						<label className='text-sm text-urbain-white' htmlFor='message'>
							Votre message
						</label>
						<TextArea
							error={
								state.ok === false && state.error.name === "message"
									? state.error.message
									: ""
							}
							className='bg-urbain-white focus:bg-urbain-white'
							id='message'
							placeholder='Votre message'
							name='message'
						/>
					</div>

					<Box
						disabled={pending}
						component='button'
						variant='primary'
						className='w-full'
						type='submit'>
						<span className='w-full text-center'>Envoyer</span>
					</Box>
				</form>
			</div>
		</div>
	)
}
