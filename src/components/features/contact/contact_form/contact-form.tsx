"use client"

import Input from "@/components/common/input"
import TextArea from "@/components/common/text-area"
import Box from "@/components/common/box"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "react-toastify"
import submitContactFormAction from "@/components/features/contact/contact_form/action"
import { useEffect, useRef } from "react"

const initialValue = {
	email: null,
	phoneNumber: null,
	fullName: null,
	topic: null,
	message: null,
}

type ContactFormProps = {
	submitContactFormAction: (initialState: any, formData: FormData) => void
}

export default function ContactForm({}: ContactFormProps) {
	const { pending } = useFormStatus()
	const [state, action] = useFormState(submitContactFormAction, initialValue)
	const formRef = useRef<HTMLFormElement>(null)

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
			ref={formRef}
			action={data => {
				action(data)
				formRef.current?.reset()
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
	)
}
