"use client"

import useClickOutside from "@/hooks/use_click_outside"
import { useMemo, useState } from "react"
import CategoryItem from "./category_item"
import SubCategories from "./sub_categories"
import { Categories } from "./types"

type WrappedCategoriesProps = { categories: Categories }
export default function WrappedCategories({
	categories,
}: WrappedCategoriesProps) {
	const [selectedTag, setSelectedTag] = useState("")

	const containerRef = useClickOutside<HTMLDivElement>({
		handler: () => setSelectedTag(""),
	})

	const selectedCategory = useMemo(
		() => categories.find(category => category.tag === selectedTag),
		[categories, selectedTag],
	)

	return (
		<div
			ref={containerRef}
			className='fixed right-0 top-0 z-50 hidden h-screen bg-urbain-black lg:block'>
			<div className='flex h-full px-5 pb-16 pt-32'>
				{selectedCategory && (
					<div className='h-full w-96'>
						<SubCategories
							category={selectedCategory}
							key={selectedCategory.id}
						/>
					</div>
				)}

				<div className='flex flex-col items-end space-y-16'>
					{Object.values(categories).map(category => (
						<CategoryItem
							key={category.id}
							category={category}
							handleClick={categoryTag => setSelectedTag(categoryTag)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
