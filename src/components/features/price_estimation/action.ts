"use server"

import {
	submitPriceEstimation,
	SubmitPriceEstimationResult,
	uploadFile,
} from "@/lib/api"
import { z } from "zod"
import parseZodErrors from "@/lib/parse-zod-errors"

export default async function submitPriceEstimationAction(
	initialState: any,
	formData: FormData,
): Promise<SubmitPriceEstimationResult> {
	const fileData = formData.get("attached-file")
	if (!fileData)
		return {
			ok: false,
			error: { name: "attached-file", message: "attached file not found" },
		}

	const data = new FormData()
	data.append("files", fileData)
	const uploadedFileResult = await uploadFile(data)
	if (!uploadedFileResult.ok)
		return {
			ok: false,
			error: {
				message: uploadedFileResult.error.message,
				name: uploadedFileResult.error.name,
			},
		}

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
		company: z.string({
			required_error: "Le nom de l'entreprise est obligatoire",
			invalid_type_error: "Le nom de l'entreprise n'est pas valide",
		}),
		request: z.string({
			required_error: "La demande est obligatoire",
			invalid_type_error: "La demande n'est pas valide",
		}),
		taxNumber: z
			.string({ invalid_type_error: "Le tax number n'est pas valide" })
			.optional(),
	})

	const result = schema.safeParse({
		fullName: formData.get("fullName"),
		email: formData.get("email"),
		topic: formData.get("topic"),
		company: formData.get("company"),
		taxNumber: formData.get("taxNumber"),
		product: formData.get("product"),
		request: formData.get("request"),
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

	return await submitPriceEstimation({
		...result.data,
		full_name: result.data.fullName,
		tax_number: result.data.taxNumber,
		company_name: result.data.company,
		attached_file: uploadedFileResult.data.fileId,
	})
}
