"use server"

import { submitContactForm, SubmitContactFormResult } from "@/lib/api"
import { z } from "zod"

export default async function submitContactFormAction(
	initialState: any,
	formData: FormData,
): Promise<SubmitContactFormResult> {
	const schema = z.object({
		email: z.string().email(),
		topic: z.string(),
		fullName: z.string(),
		message: z.string(),
		phoneNumber: z.bigint(),
	})

	const result = schema.safeParse(formData)
	if (!result.success)
		return {
			ok: false,
			error: { message: result.error.message, name: result.error.name },
		}

	return await submitContactForm(result.data)
}
