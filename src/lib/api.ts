import { Categories, Category } from "@/components/features/categories/types"
import { Newsletter } from "@/components/features/newsletter/types"
import { Slides } from "@/components/features/popular_products_slider/types"
import { Product, Products } from "@/components/features/product/types"

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
	const query: Record<string, string> = {}
	if (args?.limit !== undefined)
		query["pagination[pageSize]"] = args.limit.toString()
	if (!args?.fields) query["populate"] = "*"
	else {
		args.fields.forEach((value, index) => {
			query[`fields[${index}]`] = value.toString()
		})

		if (!args.fields.includes("tag"))
			query[`fields[${args.fields.length}]`] = "tag"
	}

	const queryString = new URLSearchParams(query)
	const url = baseStrapiApiUrl + "/api/categories?" + queryString.toString()

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
						description: curr.attributes.description,
						createdAt:
							curr.attributes.createdAt && new Date(curr.attributes.createdAt),
						updatedAt:
							curr.attributes.createdAt && new Date(curr.attributes.updatedAt),
						publishedAt:
							curr.attributes.createdAt &&
							new Date(curr.attributes.publishedAt),

						link: `/${curr.attributes.tag}`,
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

type ListProductsArgs = {
	limit?: number
	filter?: { category?: string }
	query?: string
}

type ListProductsResult =
	| { ok: true; data: { products: Products } }
	| { ok: false; error: { name: string; message: string } }

export async function listProducts(
	args?: ListProductsArgs,
): Promise<ListProductsResult> {
	let url = baseStrapiApiUrl + "/api/products?populate=*"

	if (args?.limit) url += `&pagination[pageSize]=${args.limit}`

	if (args?.filter?.category)
		url += `&filters[category][tag]=${args.filter.category}`

	if (args?.query) url += `&filters[title][$containsi]=${args.query}`

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
						dimensions: curr.attributes.dimensions,
						description: curr.attributes.description,
						category: curr.attributes.category.data.attributes.tag,
						catalog: curr.attributes.catalog?.data
							? `${baseStrapiApiUrl}${curr.attributes.catalog.data.attributes.url}`
							: undefined,
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

type GetCategoryResult =
	| { ok: true; data: { category: Category } }
	| { ok: false; error: { name: string; message: string } }

type GetCategoryArgs = { categoryTag: string }

export async function getCategory(
	args: GetCategoryArgs,
): Promise<GetCategoryResult> {
	const url =
		baseStrapiApiUrl + `/api/categories/${args.categoryTag}?populate=*`

	try {
		const response = await fetch(url)
		const { data } = await response.json()

		return {
			ok: true,
			data: {
				category: {
					id: data.id,
					tag: data.attributes.tag,
					title: data.attributes.title,
					description: data.attributes.description,
					createdAt:
						data.attributes.createdAt && new Date(data.attributes.createdAt),
					updatedAt:
						data.attributes.createdAt && new Date(data.attributes.updatedAt),
					publishedAt:
						data.attributes.createdAt && new Date(data.attributes.publishedAt),
					link: `/${data.attributes.tag}`,
				},
			},
		}
	} catch (e) {
		return {
			ok: false,
			error: {
				name: "Error",
				message: "An error happened while fetching category",
			},
		}
	}
}

export type SubmitContactFormArgs = {
	fullName: string
	email: string
	phoneNumber: number
	topic: string
	message: string
}

export type SubmitContactFormResult =
	| { ok: true }
	| { ok: false; error: { name: string; message: string } }

export async function submitContactForm(
	args: SubmitContactFormArgs,
): Promise<SubmitContactFormResult> {
	try {
		const url = baseStrapiApiUrl + "/api/contacts"
		const response = await fetch(url, {
			body: JSON.stringify({
				data: {
					...args,
					full_name: args.fullName,
					phone_number: args.phoneNumber,
				},
			}),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		})

		await response.json()
		return { ok: true }
	} catch (e) {
		const error = e as any

		return {
			ok: false,
			error: { name: error.error.name, message: error.error.message },
		}
	}
}

type GetProductArgs = { productTag: string }

type GetProductResult =
	| { ok: true; data: { product: Product } }
	| { ok: false; error: { name: string; message: string } }

export async function getProduct(
	args: GetProductArgs,
): Promise<GetProductResult> {
	let url = baseStrapiApiUrl + `/api/products/${args.productTag}`

	try {
		const response = await fetch(url)
		const { data } = await response.json()

		return {
			ok: true,
			data: {
				product: {
					id: data.id,
					tag: data.attributes.tag,
					title: data.attributes.title,
					createdAt:
						data.attributes.createdAt && new Date(data.attributes.createdAt),
					updatedAt:
						data.attributes.createdAt && new Date(data.attributes.updatedAt),
					publishedAt:
						data.attributes.createdAt && new Date(data.attributes.publishedAt),
					link: `/products/${data.attributes.tag}`,
					thumbnail:
						data.attributes.thumbnail &&
						`${baseStrapiApiUrl}${data.attributes.thumbnail.data.attributes.url}`,
					images: data.attributes.images.data.map(
						(image: any): string =>
							`${baseStrapiApiUrl}${image.attributes.url}`,
					),
					dimensions: data.attributes.dimensions,
					description: data.attributes.description,
					category: data.attributes.category.data.attributes.tag,
					catalog: data.attributes.catalog?.data
						? `${baseStrapiApiUrl}${data.attributes.catalog.data.attributes.url}`
						: undefined,
				},
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

export type SubmitPriceEstimationArgs = {
	full_name: string
	email: string
	topic: string
	company_name: string
	tax_number?: string
	attached_file: number
	request: string
}

export type SubmitPriceEstimationResult =
	| { ok: true }
	| { ok: false; error: { name: string; message: string } }

export async function submitPriceEstimation(
	args: SubmitPriceEstimationArgs,
): Promise<SubmitPriceEstimationResult> {
	try {
		const url = baseStrapiApiUrl + "/api/price-estimations"
		const response = await fetch(url, {
			body: JSON.stringify({ data: { ...args } }),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		})

		await response.json()
		return { ok: true }
	} catch (e) {
		const error = e as any

		return {
			ok: false,
			error: { name: error.error.name, message: error.error.message },
		}
	}
}

type SubmitCartArgs = {
	fullName: string
	email: string
	phoneNumber: string
	topic: string
	message: string
	cartItems: Array<{
		productId: string
		count: number
	}>
}

export type SubmitCartResult =
	| { ok: true }
	| { ok: false; error: { name: string; message: string } }

export async function submitCart(
	args: SubmitCartArgs,
): Promise<SubmitCartResult> {
	try {
		const url = baseStrapiApiUrl + "/api/shopping-carts"
		const response = await fetch(url, {
			body: JSON.stringify({
				data: {
					...args,
					full_name: args.fullName,
					phone_number: args.phoneNumber,
					cart_items: args.cartItems.map(item => {
						return {
							produit: item.productId,
							nombre_articles: item.count,
						}
					}),
				},
			}),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		})

		await response.json()
		return { ok: true }
	} catch (e) {
		const error = e as any

		return {
			ok: false,
			error: { name: error.error.name, message: error.error.message },
		}
	}
}

export type UploadFileResult =
	| { ok: true; data: { fileId: number } }
	| { ok: false; error: { name: string; message: string } }

export async function uploadFile(
	formData: FormData,
): Promise<UploadFileResult> {
	try {
		const url = baseStrapiApiUrl + "/api/upload"
		const response = await fetch(url, {
			body: formData,
			method: "POST",
		})

		const data = await response.json()
		if (data.length <= 0)
			return {
				ok: false,
				error: { name: "attached-file", message: "no uploaded file" },
			}

		return { ok: true, data: { fileId: data[0].id } }
	} catch (e) {
		const error = e as any

		return {
			ok: false,
			error: { name: error.error.name, message: error.error.message },
		}
	}
}
