import Products from "@/components/features/products"
import SearchBox from "@/components/features/search_box/search_box"
import { listProducts } from "@/lib/api"
import Link from "next/link"

type SearchPageProps = {
	searchParams: { query: string; limit: string }
}

export default async function SearchPage({
	searchParams: { query, limit },
}: SearchPageProps) {
	const formattedLimit = !Number.isNaN(limit) ? Number.parseInt(limit) : 4
	const productsResponse = await listProducts({
		query,
		limit: formattedLimit,
	})

	const products = productsResponse.ok ? productsResponse.data.products : []

	return (
		<div className='mx-auto mb-10 mt-44 w-11/12'>
			<div className='mx-auto w-11/12 rounded-lg border border-gray-200 bg-slate-100 p-2 text-urbain-black lg:w-4/12'>
				<SearchBox query={query} />
			</div>

			{products.length === 0 && (
				<div className='mt-10 flex flex-col items-center'>
					<span className='max-w-xl text-center font-play-fair text-3xl font-bold leading-snug tracking-wider text-urbain-black'>
						aucun produit n&apos;est trouvé pour le terme &quot;{query}&quot;
					</span>
				</div>
			)}

			{products.length > 0 && (
				<div className='mt-10 flex w-full flex-col items-center gap-y-8'>
					<Products products={products} />

					<Link
						className='flex items-center space-x-3 rounded-md bg-urbain-orange px-6 py-3 font-montserrat text-xs font-normal leading-normal tracking-normal text-urbain-white hover:bg-orange-700 lg:block lg:text-sm'
						href={`/search?query=${query}&limit=${formattedLimit + 4}`}>
						Voir plus
					</Link>
				</div>
			)}
		</div>
	)
}
