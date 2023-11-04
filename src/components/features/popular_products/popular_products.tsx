import chair from "@/../public/images/chair.png"
import productFour from "@/../public/images/product_four.jpg"
import productOne from "@/../public/images/product_one.jpg"
import productThree from "@/../public/images/product_three.jpg"
import productTwo from "@/../public/images/product_two.jpg"
import grayLogo from "@/../public/svg/gray_logo.svg"
import Image from "next/image"
import ProductItem from "./product_item"
import Slider from "./slider"

const MAX_ITEMS_PER_WINDOW = 4

export default function PopularProducts() {
	return (
		<div className='relative h-screen w-full overflow-hidden bg-urbain-white'>
			<div className='mx-auto flex h-full w-4/5 flex-col items-center space-y-16 py-16 pt-32'>
				<h2 className='max-w-6xl text-center font-play-fair text-6xl font-semibold leading-snug tracking-wider text-urbain-black'>
					Produits populaires
				</h2>

				<div className='absolute left-0 top-1/2 -translate-y-1/2 translate-x-[-59%] scale-75'>
					<Image src={chair} alt='chair picture' width={927} height={1099} />
				</div>

				<div className='absolute -right-48 bottom-0 z-0 translate-y-[33%] scale-75'>
					<Image
						src={grayLogo}
						alt='urbain art gray logo'
						width={850}
						height={1030}
					/>
				</div>

				<Slider itemsPerWindow={MAX_ITEMS_PER_WINDOW}>
					<ProductItem
						key='product_one'
						id='product_one'
						image={productOne}
						title='Table de réunion'
						items={4}
					/>
					<ProductItem
						key='product_two'
						id='product_two'
						image={productTwo}
						title='Bureau Blanc'
						items={4}
					/>
					<ProductItem
						key='product_three'
						id='product_three'
						image={productThree}
						title='Bureau Bois'
						items={4}
					/>
					<ProductItem
						key='product_four'
						id='product_four'
						image={productFour}
						title='Bureau Bois'
						items={4}
					/>
					<ProductItem
						key='product_four'
						id='product_four'
						image={productFour}
						title='Bureau Bois'
						items={4}
					/>
					<ProductItem
						key='product_four'
						id='product_four'
						image={productFour}
						title='Bureau Bois'
						items={4}
					/>
				</Slider>
			</div>
		</div>
	)
}
