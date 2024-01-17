import { ZodIssue } from "zod"

type ParseZodErrorsResult = { name: string; message: string } | undefined

export default function parseZodErrors(
	errors: Array<ZodIssue>,
): ParseZodErrorsResult {
	if (errors.length === 0) return

	const error = errors[0]
	return {
		name: error.path[error.path.length - 1] as string,
		message: error.message,
	}
}
