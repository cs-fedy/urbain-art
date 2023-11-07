import { JoinNewsletterResult, joinNewsletter } from "@/lib/api"
import WrappedNewsletter from "./wrapped_newsletter"

export default function Newsletter() {
	const formAction = async (
		state: any,
		formData: FormData,
	): Promise<JoinNewsletterResult> => {
		"use server"
		const email = formData.get("email")
		if (!email)
			return {
				ok: false,
				error: {
					name: "ValidationError",
					message: "Email is required or not valid",
				},
			}
		return await joinNewsletter(email.toString())
	}

	return <WrappedNewsletter formAction={formAction} />
}
