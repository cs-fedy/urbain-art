"use client"

import cn from "@/utils/cn"
import { useState } from "react"
import { Categories } from "../categories/types"
import DropdownMobileItem from "./dropdown_mobile_item"
import SubCategoryDropdownItem from "./sub_category_dropdown_item"

type CategoriesMobileDropdownProps = { categories: Categories }

export default function CategoriesMobileDropdown({
	categories,
}: CategoriesMobileDropdownProps) {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='w-full'>
			<DropdownMobileItem
				isOpen={isOpen}
				toggle={() => setOpen(prev => !prev)}
				expandable={true}>
				<span className='font-montserrat text-sm font-normal capitalize leading-snug tracking-wider text-urbain-white'>
					no produits
				</span>
			</DropdownMobileItem>

			<div className={cn(isOpen ? "block pt-4" : "hidden pt-0")}>
				<div className='flex w-full flex-col items-start gap-y-6 py-3'>
					{categories.map(category => (
						<SubCategoryDropdownItem category={category} key={category.id} />
					))}
				</div>
			</div>
		</div>
	)
}
