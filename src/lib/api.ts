import { Categories, SubCategory } from "@/components/features/categories/types"
import { Newsletter } from "@/components/features/newsletter/types"
import { Slides } from "@/components/features/popular_products_slider/types"
import { Products } from "@/components/features/product/types"
import { Members } from "@/components/features/team/types"

const baseStrapiApiUrl =
	process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_STRAPI_BASE_URL_DEV
		: process.env.NEXT_PUBLIC_STRAPI_BASE_URL_PROD

export type JoinNewsletterResult =
	| { ok: true; data: { newsletter: Newsletter } }
	| { ok: false; error: { name: string; message: string } }

export async function joinNewsletter(
	email: string,
): Promise<JoinNewsletterResult> {
	try {
		const response = await fetch(baseStrapiApiUrl + "/api/newsletters", {
			body: JSON.stringify({ data: { email } }),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		})

		const { data } = await response.json()

		return {
			ok: true,
			data: {
				newsletter: {
					id: data.id,
					email: data.attributes.email,
					createdAt: new Date(data.attributes.createdAt),
					updatedAt: new Date(data.attributes.updatedAt),
					publishedAt: new Date(data.attributes.publishedAt),
				},
			},
		}
	} catch (e) {
		const error = e as any

		return {
			ok: false,
			error: { name: error.error.name, message: error.error.message },
		}
	}
}

type ListCategoriesResult =
	| { ok: true; data: { categories: Categories } }
	| { ok: false; error: { name: string; message: string } }

type ListCategoriesArgs = {
	limit?: number
	fields?: Array<string>
}

export async function listCategories(
	args?: ListCategoriesArgs,
): Promise<ListCategoriesResult> {
	let url = baseStrapiApiUrl + "/api/categories?"
	if (!args?.fields) url += "populate=*&"
	else {
		url += args.fields
			.map((field, index) => `fields[${index}]=${field}`)
			.join("&")

		if (!args.fields.includes("tag"))
			url += `&fields[${args.fields.length}]=tag`
	}

	if (args?.limit) url += `&pagination[pageSize]=${args.limit}`

	try {
		const response = await fetch(url)
		const { data }: { data: Array<any> } = await response.json()

		return {
			ok: true,
			data: {
				categories: data.map(curr => {
					return {
						id: curr.id,
						tag: curr.attributes.tag,
						title: curr.attributes.title,
						createdAt:
							curr.attributes.createdAt && new Date(curr.attributes.createdAt),
						updatedAt:
							curr.attributes.createdAt && new Date(curr.attributes.updatedAt),
						publishedAt:
							curr.attributes.createdAt &&
							new Date(curr.attributes.publishedAt),
						link: `/categories/${curr.attributes.tag}`,
						image:
							curr.attributes.image?.data[0] &&
							`${baseStrapiApiUrl}${curr.attributes.image.data[0].attributes.url}`,
						items:
							curr.attributes.sub_categories &&
							curr.attributes.sub_categories.data.map(
								(rawSubCategory: any): SubCategory => {
									return {
										id: rawSubCategory.id,
										tag: rawSubCategory.attributes.tag,
										title: rawSubCategory.attributes.title,
										link: `/categories/${curr.attributes.tag}/${rawSubCategory.attributes.tag}`,
										createdAt: new Date(rawSubCategory.attributes.createdAt),
										updatedAt: new Date(rawSubCategory.attributes.updatedAt),
										publishedAt: new Date(
											rawSubCategory.attributes.publishedAt,
										),
									}
								},
							),
					}
				}),
			},
		}
	} catch (e) {
		return {
			ok: false,
			error: {
				name: "Error",
				message: "An error happened while fetching categories",
			},
		}
	}
}

type ListProductsArgs = { limit?: number }

type ListProductsResult =
	| { ok: true; data: { products: Products } }
	| { ok: false; error: { name: string; message: string } }

export async function listProducts(
	args?: ListProductsArgs,
): Promise<ListProductsResult> {
	let url = baseStrapiApiUrl + "/api/products?populate=*"
	if (args?.limit) url += `&pagination[pageSize]=${args.limit}`

	try {
		const response = await fetch(url)
		const { data }: { data: Array<any> } = await response.json()

		return {
			ok: true,
			data: {
				products: data.map(curr => {
					return {
						id: curr.id,
						tag: curr.attributes.tag,
						title: curr.attributes.title,
						createdAt:
							curr.attributes.createdAt && new Date(curr.attributes.createdAt),
						updatedAt:
							curr.attributes.createdAt && new Date(curr.attributes.updatedAt),
						publishedAt:
							curr.attributes.createdAt &&
							new Date(curr.attributes.publishedAt),
						link: `/products/${curr.attributes.tag}`,
						thumbnail:
							curr.attributes.thumbnail &&
							`${baseStrapiApiUrl}${curr.attributes.thumbnail.data.attributes.url}`,
						images: curr.attributes.images.data.map(
							(image: any): string =>
								`${baseStrapiApiUrl}${image.attributes.url}`,
						),
						subTitle: curr.attributes.sub_title,
						description: curr.attributes.description,
						subCategory: curr.attributes.sub_category.data.attributes.tag,
					}
				}),
			},
		}
	} catch (e) {
		return {
			ok: false,
			error: {
				name: "Error",
				message: "An error happened while fetching products",
			},
		}
	}
}

type ListProductsSlidesResult =
	| { ok: true; data: { slides: Slides } }
	| { ok: false; error: { name: string; message: string } }

export async function listProductsSlides(): Promise<ListProductsSlidesResult> {
	try {
		const response = await fetch(
			baseStrapiApiUrl + "/api/products-sliders?populate=*",
		)
		const { data }: { data: Array<any> } = await response.json()

		return {
			ok: true,
			data: {
				slides: data.map(curr => {
					return {
						id: curr.id,
						tag: curr.attributes.tag,
						createdAt:
							curr.attributes.createdAt && new Date(curr.attributes.createdAt),
						updatedAt:
							curr.attributes.createdAt && new Date(curr.attributes.updatedAt),
						publishedAt:
							curr.attributes.createdAt &&
							new Date(curr.attributes.publishedAt),
						slide:
							curr.attributes.slide &&
							`${baseStrapiApiUrl}${curr.attributes.slide.data.attributes.url}`,
					}
				}),
			},
		}
	} catch (e) {
		return {
			ok: false,
			error: {
				name: "Error",
				message: "An error happened while fetching products",
			},
		}
	}
}

type ListMembersArgs = { limit?: number }

type ListMembersResult =
	| { ok: true; data: { members: Members } }
	| { ok: false; error: { name: string; message: string } }

export async function listMembers(
	args?: ListMembersArgs,
): Promise<ListMembersResult> {
	let url = baseStrapiApiUrl + "/api/teams?populate=*"
	if (args?.limit) url += `&pagination[pageSize]=${args.limit}`

	try {
		const response = await fetch(url)
		const { data }: { data: Array<any> } = await response.json()

		return {
			ok: true,
			data: {
				members: data.map(curr => {
					return {
						id: curr.id,
						tag: curr.attributes.tag,
						fullName: curr.attributes.full_name,
						position: curr.attributes.position,
						createdAt:
							curr.attributes.createdAt && new Date(curr.attributes.createdAt),
						updatedAt:
							curr.attributes.createdAt && new Date(curr.attributes.updatedAt),
						publishedAt:
							curr.attributes.createdAt &&
							new Date(curr.attributes.publishedAt),
						image:
							curr.attributes.image &&
							`${baseStrapiApiUrl}${curr.attributes.image.data.attributes.url}`,
					}
				}),
			},
		}
	} catch (e) {
		return {
			ok: false,
			error: {
				name: "Error",
				message: "An error happened while fetching members",
			},
		}
	}
}
