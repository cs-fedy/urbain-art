import ideas from "@/../public/svg/ideas.svg"
import logo from "@/../public/svg/logo.svg"
import loyalty from "@/../public/svg/loyalty.svg"
import passion from "@/../public/svg/passion.svg"

import Image from "next/image"

export default function Experience() {
	return (
		<div className='relative w-full overflow-hidden bg-urbain-black lg:h-screen'>
			<div className='mx-auto flex h-full w-4/5 flex-col items-center gap-y-16 py-16 lg:pt-32'>
				<div className='absolute -bottom-44 -left-60 hidden h-[54rem] w-[45rem] opacity-5 lg:block'>
					<Image src={logo} alt='urbain art gray logo' fill />
				</div>

				<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-white sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-6xl'>
					Plus que{" "}
					<span className='text-urbain-orange'>25 ans d&apos;expérience</span>,
					toujours avec les mêmes valeurs
				</h2>

				<div className='grid w-full grid-cols-1 items-baseline justify-items-center gap-y-20 lg:grid-cols-3'>
					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image
								src={loyalty}
								alt='loyalty icon'
								width={180}
								height={117}
							/>
						</div>
						<h3 className='text-center font-play-fair text-2xl font-bold text-urbain-white md:text-3xl lg:text-4xl'>
							Fidélité
						</h3>
						<span className='max-w-[11rem] text-center text-sm text-gray-500 md:text-base'>
							Nous sommes fidèles à nos clients
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image src={ideas} alt='ideas icon' width={140} height={136} />
						</div>
						<h3 className='text-center font-play-fair text-2xl font-bold text-urbain-white md:text-3xl lg:text-4xl'>
							Porteurs d&apos;idées
						</h3>
						<span className='max-w-[11rem] text-center text-sm text-gray-500 md:text-base'>
							Nous sommes des porteurs d&apos;idées
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image
								src={passion}
								alt='loyalty icon'
								width={140}
								height={126}
							/>
						</div>
						<h3 className='max-w-[15rem] text-center font-play-fair text-2xl font-bold text-urbain-white md:text-3xl lg:text-4xl'>
							Passion pour le travail
						</h3>
						<span className='max-w-[11rem] text-center text-sm text-gray-500 md:text-base'>
							Nous sommes passionnés par le travail
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
