import grayLogo from "@/../public/svg/gray_logo.svg"
import Box from "@/components/common/box"
import { listProducts } from "@/lib/api"
import Image from "next/image"
import { SubCategory } from "./categories/types"
import Products from "./products"

type CategoryProductsProps = {
	subCategory: SubCategory
	limit: number
}

export default async function CategoryProducts({
	subCategory,
	limit,
}: CategoryProductsProps) {
	const products = await listProducts({
		filter: { subCategory: subCategory.tag },
		limit,
	})

	// TODO: show 500 page
	if (!products.ok) return <></>

	return (
		<div className='relative w-full overflow-hidden  pt-[4.75rem] lg:pt-0'>
			<div className='absolute -bottom-28 -left-48 z-0 h-[54rem] w-[45rem]'>
				<Image src={grayLogo} alt='urbain art gray logo' fill />
			</div>

			<div className='relative z-20 mx-auto flex h-full w-4/5 flex-col items-center gap-y-12 py-16 lg:pt-44'>
				<div className='flex w-full flex-col items-start gap-y-6'>
					<h1 className='w-full text-center font-play-fair text-3xl font-bold leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
						{subCategory.title}
					</h1>

					<span className='max-w-4xl text-center text-sm leading-snug tracking-wider text-urbain-black md:text-base lg:text-left lg:text-lg'>
						{subCategory.description}
					</span>
				</div>

				<div className='flex w-full flex-col items-center gap-y-8'>
					<Products products={products.data.products} />

					<Box
						variant='primary'
						component='a'
						className='lg:block'
						href={`/${subCategory.tag}?limit=${limit + 6}`}>
						Voir plus
					</Box>
				</div>
			</div>
		</div>
	)
}
