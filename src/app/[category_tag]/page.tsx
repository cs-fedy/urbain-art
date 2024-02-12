import CategoryProducts from "@/components/features/category_products"
import { getCategory } from "@/lib/api"
import { notFound } from "next/navigation"

type CategoryPageProps = {
	params: { category_tag: string }
	searchParams: { limit: number }
}

export default async function CategoryPage({
	params: { category_tag },
	searchParams: { limit },
}: CategoryPageProps) {
	const category = await getCategory({ categoryTag: category_tag })
	if (!category.ok) return notFound()

	return (
		<div className='mt-10 w-full'>
			<CategoryProducts category={category.data.category} limit={limit ?? 4} />
		</div>
	)
}
