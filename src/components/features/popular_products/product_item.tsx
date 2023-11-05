import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import Image, { StaticImageData } from "next/image"

type ProductItemProps = {
	id: string
	image: StaticImageData
	title: string
	items: number
}

export default function ProductItem({ image, title, items }: ProductItemProps) {
	return (
		<div className='flex h-full w-full flex-col items-start overflow-hidden rounded-lg bg-white shadow-sm'>
			<div className='aspect-square w-full overflow-hidden'>
				<Image src={image} alt={title} width={392} height={382} />
			</div>

			<div className='flex w-full flex-col items-center space-y-6 p-4 font-medium'>
				<div className='flex w-full flex-col items-start space-y-2'>
					<h3 className='font-montserrat text-lg text-urbain-black md:text-xl lg:text-2xl'>
						{title}
					</h3>
					<span className='text-base text-urbain-black md:text-lg lg:text-xl'>
						{items === 1 ? "une place" : `${items} places`}
					</span>
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
