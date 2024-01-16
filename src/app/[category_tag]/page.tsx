import CategoryProducts from "@/components/features/category_products"
import { getCategory } from "@/lib/api"

type CategoryPageProps = {
	params: { category_tag: string }
	searchParams: { limit: number }
}

export default async function CategoryPage({
	params: { category_tag },
	searchParams: { limit },
}: CategoryPageProps) {
	const category = await getCategory({ categoryTag: category_tag })

	// TODO: show 404 page
	if (!category.ok) return <></>

	return (
		<div className='w-full'>
			<CategoryProducts category={category.data.category} limit={limit ?? 4} />
		</div>
	)
}
