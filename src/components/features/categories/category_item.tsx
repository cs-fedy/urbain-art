import Image, { StaticImageData } from "next/image"
import { Category } from "./types"

type CategoryItemProps = {
	category: Category
	handleClick: (categoryTag: string) => void
}

export default function CategoryItem({
	category,
	handleClick,
}: CategoryItemProps) {
	const image = category.image as StaticImageData
	return (
		<button type='button' onClick={() => handleClick(category.tag)}>
			<Image
				src={image}
				alt={category.title}
				width={image.width}
				height={image.height}
			/>
		</button>
	)
}
