import Link from "next/link"
import { SubCategory } from "./types"

type SubCategoryItemProps = { subCategory: SubCategory }

export default function SubCategoryItem({ subCategory }: SubCategoryItemProps) {
	return (
		<Link
			href={subCategory.link}
			className='font-montserrat text-xl tracking-wide text-urbain-white hover:underline'>
			{subCategory.title}
		</Link>
	)
}
