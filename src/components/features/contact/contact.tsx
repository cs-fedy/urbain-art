"use client"

import { submitContactForm } from "@/lib/api"
import ContactForm from "@/components/features/contact/contact_form/contact-form"

export default function Contact() {
	return (
		<div className='flex w-full flex-col items-start gap-14 bg-urbain-black px-12 py-8 lg:w-1/2 lg:px-24 lg:py-16'>
			<h2 className='w-full text-center font-play-fair text-2xl leading-snug tracking-wider text-urbain-white md:text-3xl lg:max-w-2xl lg:text-4xl'>
				Contactez-nous
			</h2>

			<ContactForm submitContactFormAction={submitContactForm} />
		</div>
	)
}
