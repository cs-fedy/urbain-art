import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface SubCategory {
	id: string
	tag: string
	title: string
	link: string
}

export interface Category {
	id: string
	tag: string
	title: string
	link: string
	image: StaticImageData | string | ReactNode
	items: Array<SubCategory>
}
