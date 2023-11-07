import { Image } from "@/utils/types"

export interface Slide {
	id: number
	tag: string
	slide: Image
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export type Slides = Array<Slide>
