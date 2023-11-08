"use client"

import cn from "@/utils/cn"
import Link from "next/link"
import { useState } from "react"
import { Category } from "../categories/types"
import DropdownMobileItem from "./dropdown_mobile_item"

type SubCategoryDropdownItem = { category: Category }

export default function SubCategoryDropdownItem({
	category,
}: SubCategoryDropdownItem) {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='w-full'>
			<DropdownMobileItem
				expandable={true}
				isOpen={isOpen}
				toggle={() => setOpen(prev => !prev)}>
				<span className='font-montserrat tracking-wide text-urbain-white hover:underline'>
					{category.title}
				</span>
			</DropdownMobileItem>

			{isOpen && (
				<div
					className={cn(
						isOpen
							? "block border-b-2 border-b-urbain-white pt-2"
							: "hidden pt-0",
					)}>
					<div className='flex w-max flex-col items-start gap-y-6 bg-urbain-black py-3'>
						{category.items.map(item => (
							<Link
								key={item.id}
								href={item.link}
								className='font-montserrat tracking-wide text-urbain-white hover:underline'>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
