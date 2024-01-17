"use server"

import { submitContactForm, SubmitContactFormResult } from "@/lib/api"
import { z } from "zod"
import parseZodErrors from "@/lib/parse-zod-errors"

export default async function submitContactFormAction(
	initialState: any,
	formData: FormData,
): Promise<SubmitContactFormResult> {
	const schema = z.object({
		fullName: z.string({
			required_error: "le nom et le prénom sont obligatoires",
			invalid_type_error: "nom et prénom non valides",
		}),
		email: z
			.string({
				required_error: "L'adresse e-mail est obligatoire",
				invalid_type_error: "Le format de l'email n'est pas valide",
			})
			.email(),
		topic: z.string({
			required_error: "Le sujet est obligatoire",
			invalid_type_error: "Le format du sujet n'est pas valide",
		}),
		message: z.string({
			required_error: "Le message est obligatoire",
			invalid_type_error: "Le message n'est pas valide",
		}),
		phoneNumber: z.bigint({
			required_error: "Le numéro de téléphone est obligatoire",
			invalid_type_error: "Le numéro de téléphone n'est pas valide",
		}),
	})

	const result = schema.safeParse(formData)
	if (!result.success) {
		const parsedError = parseZodErrors(result.error.errors)

		if (!parsedError)
			return {
				ok: false,
				error: { name: result.error.name, message: result.error.message },
			}

		return {
			ok: false,
			error: parsedError,
		}
	}

	return await submitContactForm(result.data)
}
