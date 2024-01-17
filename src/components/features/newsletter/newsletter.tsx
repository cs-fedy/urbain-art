import { joinNewsletter, JoinNewsletterResult } from "@/lib/api"
import WrappedNewsletter from "./wrapped_newsletter"
import { z } from "zod"
import parseZodErrors from "@/lib/parse-zod-errors"

export default function Newsletter() {
	const formAction = async (
		state: any,
		formData: FormData,
	): Promise<JoinNewsletterResult> => {
		"use server"

		const schema = z.object({
			email: z
				.string({
					required_error: "L'adresse e-mail est obligatoire",
					invalid_type_error: "Le format de l'email n'est pas valide",
				})
				.email(),
		})

		const result = schema.safeParse({
			email: formData.get("email"),
		})

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

		return await joinNewsletter(result.data.email)
	}

	return <WrappedNewsletter formAction={formAction} />
}
