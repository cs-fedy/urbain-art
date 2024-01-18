"use client"

import { submitContactForm } from "@/lib/api"
import ContactForm from "@/components/features/contact/contact_form/contact-form"

export default function Contact() {
	return <ContactForm submitContactFormAction={submitContactForm} />
}
