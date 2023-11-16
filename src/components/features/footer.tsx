import horizontalLogo from "@/../public/svg/horizontal_logo.svg"
import Box from "@/components/common/box"
import { listCategories } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import Icon from "../common/icon"
import EnvelopeIcon from "../icons/envelope"
import PhoneIcon from "../icons/phone"
import { SubCategory } from "./categories/types"

export default async function Footer() {
	const categories = await listCategories()

	const SubCategories = !categories.ok
		? []
		: categories.data.categories
				.reduce(
					(prev, curr) => [...prev, ...curr.items],
					[] as Array<SubCategory>,
				)
				.sort((a, b) => {
					const randomValue = Math.random()
					if (randomValue > 0.5) return 1
					else if (randomValue < 0.5) return -1
					return 0
				})
				.slice(0, 5)

	return (
		<footer className='w-full bg-urbain-black'>
			<div className='mx-auto flex w-11/12 flex-col items-center justify-between gap-y-20 py-20 md:py-10 lg:flex-row'>
				<div className='flex w-full flex-col items-start space-y-8 lg:w-max'>
					<Image
						src={horizontalLogo}
						alt='horizontal urbain art logo'
						width={530}
						height={137}
					/>

					<div className='flex w-full flex-col items-start space-y-6'>
						<span className='max-w-xs text-sm leading-snug tracking-wider text-urbain-white md:text-base lg:text-lg'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever sinc
						</span>

						<div className='flex w-full items-center space-x-4'>
							<Icon
								icon={<PhoneIcon />}
								className='h-5 w-5 text-urbain-white'
							/>

							<span className='text-sm leading-snug tracking-wider text-urbain-white md:text-base lg:text-lg'>
								+(216) 59 66 88 25
							</span>
						</div>

						<div className='flex w-full items-center space-x-4'>
							<Icon
								icon={<EnvelopeIcon />}
								className='h-5 w-5 text-urbain-white'
							/>

							<span className='text-sm leading-snug tracking-wider text-urbain-white md:text-base lg:text-lg'>
								Sammari.hamza@gmail.com
							</span>
						</div>
					</div>
				</div>

				<div className='flex w-full lg:justify-center'>
					<div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2 xl:grid-cols-3'>
						<div className='flex flex-col items-start space-y-10'>
							<h3 className='text-xl font-black uppercase leading-snug tracking-wide text-urbain-white md:text-2xl lg:text-3xl'>
								Découvrez
							</h3>

							<div role='list' className='flex flex-col items-start space-y-3'>
								<Link
									href='/'
									className='text-sm font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline md:text-base lg:text-lg'>
									acceuil
								</Link>
								<Link
									href='/products'
									className='text-sm font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline md:text-base lg:text-lg'>
									nos produits
								</Link>
								<Link
									href='/about'
									className='text-sm font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline md:text-base lg:text-lg'>
									a propos
								</Link>
								<Link
									href='/contact'
									className='text-sm font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline md:text-base lg:text-lg'>
									contact
								</Link>
							</div>
						</div>

						<div className='flex flex-col items-start space-y-10'>
							<h3 className='text-xl font-black uppercase leading-snug tracking-wide text-urbain-white md:text-2xl lg:text-3xl'>
								nos produits
							</h3>

							<div
								role='list'
								className='flex w-full flex-col items-start justify-between space-y-3'>
								{SubCategories.map(category => (
									<Link
										key={category.id}
										href={category.link}
										className='text-sm font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline md:text-base lg:text-lg'>
										{category.title}
									</Link>
								))}
							</div>
						</div>

						<div className='flex flex-col items-start space-y-10'>
							<div className='flex flex-col items-start space-y-6'>
								<h3 className='text-xl font-black uppercase leading-snug tracking-wide text-urbain-white md:text-2xl lg:text-3xl'>
									demandez <br /> un devis
								</h3>

								<p className='max-w-xs text-left font-montserrat text-sm font-normal leading-snug tracking-wider text-urbain-white md:text-base lg:text-lg'>
									Demandez un devis spécifique pour le produit qui vous convient
								</p>
							</div>

							<Box variant='primary' component='a' href='/price_estimation'>
								Demande de devis
							</Box>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
