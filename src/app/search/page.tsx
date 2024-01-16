import Box from "@/components/common/box"
import Products from "@/components/features/products"
import SearchBox from "@/components/features/search_box/search_box"
import { listProducts } from "@/lib/api"

type SearchPageProps = {
	searchParams: { query: string; limit: number }
}

export default async function SearchPage({
	searchParams: { query, limit },
}: SearchPageProps) {
	const products = await listProducts({
		query,
		limit,
	})

	// TODO: show 500 page
	if (!products.ok) return <></>

	if (products.data.products.length === 0) return <div>empty state</div>

	return (
		<div className='mx-auto mb-10 mt-44 w-11/12'>
			<div className='mx-auto w-11/12 rounded-lg border border-gray-200 bg-slate-100 p-2 text-urbain-black lg:w-4/12'>
				<SearchBox query={query} />
			</div>

			<div className='mt-10 flex w-full flex-col items-center gap-y-8'>
				<Products products={products.data.products} />

				{products.data.products.length > 0 && (
					<Box
						variant='primary'
						component='a'
						className='lg:block'
						href={`/search?query=${query}${limit && "&limit=" + (limit ?? 4)}`}>
						Voir plus
					</Box>
				)}
			</div>
		</div>
	)
}
