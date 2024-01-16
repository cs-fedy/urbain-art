import Image from "next/image"
import chair from "../../../../public/images/chair.png"
import phone from "../../../../public/svg/phone.svg"
import email from "../../../../public/svg/envelope.svg"
import Link from "next/link"
import Icon from "@/components/common/icon"
import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import LinkedinIcon from "@/components/icons/linkedin"

export default function ContactDetails() {
	return (
		<div className='flex w-full flex-col items-start gap-14 py-20 pr-14 lg:w-1/2'>
			<h2 className='w-full text-center font-play-fair text-3xl font-bold leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
				Nos cordonnées
			</h2>

			<div className='absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-90%] scale-[65%] lg:block'>
				<Image src={chair} alt='chair picture' width={927} height={1099} />
			</div>

			<div className='flex w-full flex-col items-start gap-7'>
				<div className='flex w-full items-center gap-4'>
					<div className='w-10 lg:w-max'>
						<Image src={phone} alt='phone icon' width={50} height={50} />
					</div>
					<span className='w-full text-left text-urbain-black md:text-2xl lg:max-w-lg lg:text-left'>
						(+216) 55 88 77 99 - (+216 ) 54 88 99 88
					</span>
				</div>

				<div className='flex w-full items-center gap-4'>
					<div className='w-10 lg:w-max'>
						<Image src={email} alt='envelope icon' width={50} height={50} />
					</div>
					<span className='w-full text-left text-urbain-black md:text-2xl lg:max-w-lg lg:text-left'>
						Sammari.hamza@gmail.com
					</span>
				</div>
			</div>

			<div className='ml-5 flex items-center gap-x-4'>
				<Link href='/'>
					<Icon
						icon={<FacebookIcon />}
						className='h-[25px] w-[25px] text-urbain-black lg:h-[50px] lg:w-[50px]'
					/>
				</Link>
				<Link href='/'>
					<Icon
						icon={<InstagramIcon />}
						className='h-[25px] w-[25px] text-urbain-black lg:h-[50px] lg:w-[50px]'
					/>
				</Link>
				<Link href='/'>
					<Icon
						icon={<LinkedinIcon />}
						className='h-[25px] w-[25px] text-urbain-black lg:h-[50px] lg:w-[50px]'
					/>
				</Link>
			</div>
		</div>
	)
}
