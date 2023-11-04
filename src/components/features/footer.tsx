import horizontalLogo from "@/../public/svg/horizontal_logo.svg"
import Box from "@/components/common/box"
import Image from "next/image"
import Link from "next/link"
import Icon from "../common/icon"
import EnvelopeIcon from "../icons/envelope"
import FacebookIcon from "../icons/facebook"
import InstagramIcon from "../icons/instagram"
import LinkedinIcon from "../icons/linkedin"
import PhoneIcon from "../icons/phone"

export default function Footer() {
	return (
		<footer className='w-full bg-urbain-black'>
			<div className='mx-auto flex w-11/12 items-center justify-between py-10'>
				<div className='flex flex-col items-start space-y-8 pr-16'>
					<div className='flex w-full flex-col items-start space-y-5'>
						<Image
							src={horizontalLogo}
							alt='horizontal urbain art logo'
							width={530}
							height={137}
						/>
						<div className='ml-5 flex items-center space-x-2'>
							<Link href='/'>
								<Icon
									icon={<FacebookIcon />}
									className='h-[28px] w-[27px] text-urbain-white'
								/>
							</Link>
							<Link href='/'>
								<Icon
									icon={<InstagramIcon />}
									className='h-[27px] w-[27px] text-urbain-white'
								/>
							</Link>
							<Link href='/'>
								<Icon
									icon={<LinkedinIcon />}
									className='h-[27px] w-[28px] text-urbain-white'
								/>
							</Link>
						</div>
					</div>
					<div className='flex w-full flex-col items-start space-y-6'>
						<span className='max-w-sm text-lg leading-snug tracking-wider text-urbain-white'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever sinc
						</span>

						<div className='flex w-full items-center space-x-4'>
							<Icon
								icon={<PhoneIcon />}
								className='h-5 w-5 text-urbain-white'
							/>

							<span className='text-lg leading-snug tracking-wider text-urbain-white'>
								+(216) 59 66 88 25
							</span>
						</div>

						<div className='flex w-full items-center space-x-4'>
							<Icon
								icon={<EnvelopeIcon />}
								className='h-5 w-5 text-urbain-white'
							/>

							<span className='text-lg leading-snug tracking-wider text-urbain-white'>
								Sammari.hamza@gmail.com
							</span>
						</div>
					</div>
				</div>

				<div className='flex w-full justify-center'>
					<div className='mx-auto grid grid-cols-3 items-start space-x-10'>
						<div className='flex flex-col items-start space-y-10'>
							<h3 className='text-3xl font-black uppercase leading-snug tracking-wide text-urbain-white'>
								Découvrez
							</h3>

							<div role='list' className='flex flex-col items-start space-y-3'>
								<Link
									href='/'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									acceuil
								</Link>
								<Link
									href='/products'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									nos produits
								</Link>
								<Link
									href='/about'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									a propos
								</Link>
								<Link
									href='/contact'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									contact
								</Link>
							</div>
						</div>

						<div className='flex flex-col items-start space-y-10'>
							<h3 className='text-3xl font-black uppercase leading-snug tracking-wide text-urbain-white'>
								nos produits
							</h3>

							<div
								role='list'
								className='flex w-full flex-col items-start justify-between space-y-3'>
								<Link
									href='/products/meuble_bureau'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									meuble bureau
								</Link>
								<Link
									href='/products/meuble_open_space'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									meuble open space
								</Link>
								<Link
									href='/products/meuble_event'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									meuble évènement
								</Link>
								<Link
									href='/products/siege'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									siège
								</Link>
								<Link
									href='/products/accessories'
									className='font-medium capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:underline'>
									accessoires
								</Link>
							</div>
						</div>

						<div className='flex flex-col items-start space-y-10'>
							<div className='flex flex-col items-start space-y-6'>
								<h3 className='text-3xl font-black uppercase leading-snug tracking-wide text-urbain-white'>
									demandez un devis
								</h3>

								<p className='max-w-xs text-left font-montserrat text-lg font-normal leading-snug tracking-wider text-urbain-white'>
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
