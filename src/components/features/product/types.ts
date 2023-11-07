import { Image } from "@/utils/types"

export interface Product {
	id: number
	tag: string
	title: string
	subCategory: string
	link: string
	subTitle: string
	description: string
	thumbnail: Image
	images: Array<Image>
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export type Products = Array<Product>
