import { Image } from "@/utils/types"

export interface Product {
	id: number
	tag: string
	title: string
	category: string
	link: string
	dimensions: string
	description: string
	thumbnail: Image
	images: Array<Image>
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	catalog?: string
}

export type Products = Array<Product>
