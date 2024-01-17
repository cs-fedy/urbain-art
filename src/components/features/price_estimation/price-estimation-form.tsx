"use client"

import Input from "@/components/common/input"
import TextArea from "@/components/common/text-area"
import Box from "@/components/common/box"
import { useFormState, useFormStatus } from "react-dom"
import submitPriceEstimationAction from "@/components/features/price_estimation/action"
import { useEffect } from "react"
import { toast } from "react-toastify"

const initialState = {
	fullName: null,
	email: null,
	topic: null,
	company: null,
	taxNumber: null,
	product: null,
	request: null,
}

export default function PriceEstimationForm() {
	const { pending } = useFormStatus()
	const [state, action] = useFormState(
		submitPriceEstimationAction,
		initialState,
	)

	useEffect(() => {
		if (state.ok) {
			toast.success("Demande envoyée avec succès", {
				position: "top-right",
				style: { backgroundColor: "#000000" },
			})
		}
	}, [state])

	return (
		<form
			action={action}
			className='flex w-full flex-col items-center gap-y-4 p-4'>
			<div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-2'>
				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='full-name'>
						Nom et prénom *
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "fullName"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='full-name'
						name='fullName'
						type='text'
					/>
				</div>

				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='comapny'>
						Nom de votre entreprise *
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "company"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='comapny'
						name='company'
						type='text'
					/>
				</div>

				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='email'>
						Votre email *
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "email"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='email'
						name='email'
						type='email'
					/>
				</div>

				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='tax-number'>
						Matricule Fiscale
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "taxNumber"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='tax-number'
						name='taxNumber'
						type='text'
					/>
				</div>

				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='topic'>
						Sujet *
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "topic"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='topic'
						name='topic'
						type='text'
					/>
				</div>

				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-black' htmlFor='product'>
						Produit *
					</label>
					<Input
						error={
							state.ok === false && state.error.name === "product"
								? state.error.message
								: ""
						}
						className='border border-gray-200'
						id='product'
						name='product'
						type='text'
					/>
				</div>
			</div>

			<div className='flex w-full flex-col items-start'>
				<label className='text-sm text-urbain-black' htmlFor='request'>
					Votre demande *
				</label>
				<TextArea
					error={
						state.ok === false && state.error.name === "request"
							? state.error.message
							: ""
					}
					className='border border-gray-200'
					id='request'
					name='request'
				/>
			</div>

			<Box
				component='button'
				variant='primary'
				className='w-full'
				type='submit'
				disabled={pending}>
				<span className='w-full text-center'>Envoyer</span>
			</Box>
		</form>
	)
}
