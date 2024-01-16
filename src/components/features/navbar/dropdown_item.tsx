import Link from "next/link"
import { Category } from "../categories/types"

type DropdownItemProps = { category: Category }

export default function DropdownItem({ category }: DropdownItemProps) {
	return (
		<Link
			href={category.link}
			className='flex w-full items-center justify-between gap-x-10'>
			<span className='font-montserrat tracking-wide text-urbain-white hover:underline'>
				{category.title}
			</span>
		</Link>
	)
}
