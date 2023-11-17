import { redirect } from "next/navigation"
import WrappedSearchBox from "./wrapped_search_box"

type SearchBoxProps = { query?: string }

export default function SearchBox({ query }: SearchBoxProps) {
	const formAction = async (state: any, formData: FormData): Promise<void> => {
		"use server"
		const searchQuery = formData.get("query")
		if (searchQuery) {
			redirect(`/search?query=${searchQuery}`)
		}
	}

	return <WrappedSearchBox query={query} formAction={formAction} />
}
