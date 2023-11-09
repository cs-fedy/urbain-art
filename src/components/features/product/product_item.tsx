import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import Image from "next/image"
import { Product } from "./types"

type ProductItemProps = { product: Product }

// TODO: fix the style
export default function ProductItem({ product }: ProductItemProps) {
	return (
		<div className='flex h-full w-full flex-col items-start overflow-hidden rounded-lg bg-white shadow-sm'>
			<div className='aspect-square overflow-hidden'>
				<Image
					src={product.thumbnail as string}
					alt={product.title}
					width={392}
					height={382}
				/>
			</div>

			<div className='flex w-full flex-col items-center space-y-6 p-4 font-medium'>
				<div className='flex w-full flex-col items-start space-y-2'>
					<h3 className='font-montserrat text-lg text-urbain-black md:text-xl lg:text-2xl'>
						{product.title}
					</h3>
					<span className='text-sm text-urbain-black '>{product.subTitle}</span>
				</div>
				<div className='flex w-full justify-end'>
					<Box component='button' variant='secondary'>
						<span>Ajouter</span>
						<Icon
							icon={<ShoppingCartIcon />}
							className='h-4 w-4 text-urbain-white'
						/>
					</Box>
				</div>
			</div>
		</div>
	)
}
