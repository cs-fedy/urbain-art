"use client"

import Input from "@/components/common/input"
import TextArea from "@/components/common/text-area"
import Box from "@/components/common/box"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import submitContactFormAction from "@/components/features/contact/contact_form/action"
import { useEffect } from "react"

const initialValue = {
	email: null,
	phoneNumber: null,
	fullName: null,
	topic: null,
	message: null,
}

export default function ContactForm() {
	const [state, action] = useFormState(submitContactFormAction, initialValue)

	useEffect(() => {
		if (state.ok) {
			toast.success("Demande envoyée avec succès", {
				position: "top-right",
				style: { backgroundColor: "#000000" },
			})
		}
	}, [state])

	return (
		<div className='flex w-full flex-col items-start gap-14 bg-urbain-black px-12 py-8 lg:w-1/2 lg:px-24 lg:py-16'>
			<h2 className='w-full text-center font-play-fair text-2xl leading-snug tracking-wider text-urbain-white md:text-3xl lg:max-w-2xl lg:text-4xl'>
				Contactez-nous
			</h2>

			<form action={action} className='flex w-full flex-col items-start gap-12'>
				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-white' htmlFor='full-name'>
						Nom et prénom
					</label>
					<Input
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
						className='bg-urbain-white focus:bg-urbain-white'
						id='email'
						placeholder='Email'
						name='email'
						type='email'
					/>
				</div>
				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-white' htmlFor='phone-number'>
						Téléphone
					</label>
					<Input
						className='bg-urbain-white focus:bg-urbain-white'
						id='phone-number'
						placeholder='Téléphone'
						name='phoneNumber'
						type='number'
					/>
				</div>
				<div className='flex w-full flex-col items-start'>
					<label className='text-sm text-urbain-white' htmlFor='sujet'>
						Sujet
					</label>
					<Input
						className='bg-urbain-white focus:bg-urbain-white'
						id='sujet'
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
						className='bg-urbain-white focus:bg-urbain-white'
						id='message'
						placeholder='Votre message'
						name='message'
					/>
				</div>

				<Box
					component='button'
					variant='primary'
					className='w-full'
					type='submit'>
					<span className='w-full text-center'>Envoyer</span>
				</Box>
			</form>
		</div>
	)
}
