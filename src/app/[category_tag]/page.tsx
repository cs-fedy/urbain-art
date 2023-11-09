import CategoryProducts from "@/components/features/category_products/category_products"
import { getSubCategory } from "@/lib/api"

type CategoryPageProps = {
	params: { category_tag: string }
	searchParams: { limit: number }
}

export default async function CategoryPage({
	params: { category_tag },
	searchParams: { limit },
}: CategoryPageProps) {
	const subCategory = await getSubCategory({ subCategoryTag: category_tag })

	// TODO: show 404 page
	if (!subCategory.ok) return <></>

	return (
		<div className='w-full'>
			<CategoryProducts
				subCategory={subCategory.data.subCategory}
				limit={limit ?? 4}
			/>
		</div>
	)
}
