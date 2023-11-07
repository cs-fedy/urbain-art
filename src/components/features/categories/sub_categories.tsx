import SubCategoryItem from "./sub_category_item"
import { Category } from "./types"

type SubCategoriesProps = { category: Category }

export default function SubCategories({ category }: SubCategoriesProps) {
	return (
		<div className='flex w-full flex-col items-start space-y-16 px-5'>
			<h2 className='font-montserrat text-3xl font-bold tracking-wide text-urbain-white'>
				{category.title}
			</h2>

			{category.items.map(item => (
				<SubCategoryItem key={item.id} subCategory={item} />
			))}
		</div>
	)
}
