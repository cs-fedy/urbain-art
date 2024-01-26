"use server"

import { submitCart, SubmitCartResult } from "@/lib/api"
import { z } from "zod"
import parseZodErrors from "@/lib/parse-zod-errors"

export default async function submitCartAction(
	initialState: any,
	formData: FormData,
): Promise<SubmitCartResult> {
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
		phoneNumber: z.string({
			required_error: "Le numéro de téléphone est obligatoire",
			invalid_type_error: "Le numéro de téléphone n'est pas valide",
		}),
		cartItems: z.array(
			z.object({
				productId: z.string(),
				count: z.number(),
			}),
		),
	})

	const cartItems = formData.get("cartItems")?.toString()

	const args = {
		fullName: formData.get("fullName"),
		email: formData.get("email"),
		topic: formData.get("topic"),
		message: formData.get("message"),
		phoneNumber: formData.get("phoneNumber"),
		cartItems: cartItems ? JSON.parse(cartItems) : [],
	}

	console.log(args)
	const result = schema.safeParse(args)
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

	return submitCart(result.data as any)
}
