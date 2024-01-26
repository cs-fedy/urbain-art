import { FileDetails } from "@/lib/types"

export default function getFileDetails(
	file: File | string | undefined | null,
): FileDetails | undefined {
	if (!file) return undefined

	if (file instanceof File)
		return { name: file.name, url: URL.createObjectURL(file) }

	try {
		const fileUrl = new URL(file)
		return { url: fileUrl.toString(), name: fileUrl.pathname.slice(1) }
	} catch (err) {
		return undefined
	}
}
