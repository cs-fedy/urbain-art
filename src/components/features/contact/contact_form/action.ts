"use server"

import { submitContactForm, SubmitContactFormResult } from "@/lib/api"

export default async function submitContactFormAction(
	initialState: any,
	formData: FormData,
): Promise<SubmitContactFormResult> {
	const email = formData.get("email")?.toString()
	if (!email)
		return {
			ok: false,
			error: {
				name: "ValidationError",
				message: "Email is required or not valid",
			},
		}

	const topic = formData.get("topic")?.toString()
	if (!topic)
		return {
			ok: false,
			error: {
				name: "ValidationError",
				message: "Email is required or not valid",
			},
		}

	const fullName = formData.get("fullName")?.toString()
	if (!fullName)
		return {
			ok: false,
			error: {
				name: "ValidationError",
				message: "Email is required or not valid",
			},
		}

	const message = formData.get("message")?.toString()
	if (!message)
		return {
			ok: false,
			error: {
				name: "ValidationError",
				message: "Email is required or not valid",
			},
		}

	const phoneNumber = formData.get("phoneNumber")?.toString()
	if (!phoneNumber)
		return {
			ok: false,
			error: {
				name: "ValidationError",
				message: "Email is required or not valid",
			},
		}

	return await submitContactForm({
		fullName,
		email,
		topic,
		message,
		phoneNumber: phoneNumber ? Number.parseInt(phoneNumber) : 0,
	})
}
