import { Image } from "@/utils/types"

export interface SubCategory {
	id: number
	tag: string
	title: string
	link: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export interface Category {
	id: number
	tag: string
	title: string
	link: string
	image: Image
	items: Array<SubCategory>
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export type Categories = Array<Category>
