import { Image } from "@/utils/types"

export interface Member {
	id: number
	tag: string
	fullName: string
	position: string
	image: Image
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export type Members = Array<Member>
