import { listCategories } from "@/lib/api"
import WrappedCategories from "./wrapped_categories"

// TODO: handle loading state

const MAX_CATEGORIES = 6

export default async function Categories() {
	const categories = await listCategories({ limit: MAX_CATEGORIES })
	if (!categories.ok) return <></>
	return <WrappedCategories categories={categories.data.categories} />
}
