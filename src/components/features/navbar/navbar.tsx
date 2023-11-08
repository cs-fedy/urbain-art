import { listCategories } from "@/lib/api"
import WrappedNavbar from "./wrapped_navbar"

export default async function Navbar() {
	const categories = await listCategories()
	if (!categories.ok) return <></>

	return <WrappedNavbar categories={categories.data.categories} />
}
