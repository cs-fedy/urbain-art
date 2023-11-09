import chair from "@/../public/images/chair.png"
import grayLogo from "@/../public/svg/gray_logo.svg"
import Image from "next/image"
import { PropsWithChildren } from "react"
import Slider from "../../common/slider"

const MAX_ITEMS_PER_WINDOW = 4

export default function PopularProductsWrapper({
	children,
}: PropsWithChildren) {
	return (
		<div className='relative w-full overflow-hidden bg-urbain-white lg:h-screen'>
			<div className='mx-auto flex h-full w-full flex-col items-center space-y-16 py-16 lg:w-4/5 lg:pt-32'>
				<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
					Produits populaires
				</h2>

				<div className='absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-59%] scale-75 lg:block'>
					<Image src={chair} alt='chair picture' width={927} height={1099} />
				</div>

				<div className='absolute -right-48 bottom-0 z-0 hidden translate-y-[33%] scale-75 lg:block'>
					<Image
						src={grayLogo}
						alt='urbain art gray logo'
						width={850}
						height={1030}
					/>
				</div>

				<div className='hidden w-full lg:block'>
					<Slider itemsPerWindow={MAX_ITEMS_PER_WINDOW}>{children}</Slider>
				</div>

				<div className='w-full lg:hidden'>
					<Slider itemsPerWindow={1}>{children}</Slider>
				</div>
			</div>
		</div>
	)
}
