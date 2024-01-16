export interface Category {
	id: number
	tag: string
	title: string
	description: string
	link: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export type Categories = Array<Category>
