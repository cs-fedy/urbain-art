import ideas from "@/../public/svg/ideas.svg"
import logo from "@/../public/svg/logo.svg"
import loyalty from "@/../public/svg/loyalty.svg"
import passion from "@/../public/svg/passion.svg"

import Image from "next/image"

export default function Experience() {
	return (
		<div className='relative h-screen w-full overflow-hidden bg-urbain-black '>
			<div className='mx-auto flex h-full w-4/5 flex-col items-center space-y-16 py-16 pt-32'>
				<div className='absolute -bottom-44 -left-60 h-[54rem] w-[45rem] opacity-5'>
					<Image src={logo} alt='urbain art gray logo' fill />
				</div>

				<h2 className='max-w-6xl text-center font-play-fair text-6xl font-semibold leading-snug tracking-wider text-urbain-white'>
					Plus que{" "}
					<span className='text-urbain-orange'>25 ans d&apos;expérience</span>,
					toujours avec les mêmes valeurs
				</h2>

				<div className='grid w-full grid-cols-3 items-baseline justify-items-center'>
					<div className='flex max-w-max flex-col items-center space-y-8'>
						<Image src={loyalty} alt='loyalty icon' />
						<h3 className='text-center font-play-fair text-4xl font-bold text-urbain-white'>
							Fidélité
						</h3>
						<span className='max-w-[11rem] text-center text-gray-500'>
							Nous sommes fidèles à nos clients
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-8'>
						<Image src={ideas} alt='ideas icon' />
						<h3 className='text-center font-play-fair text-4xl font-bold text-urbain-white'>
							Porteurs d&apos;idées
						</h3>
						<span className='max-w-[11rem] text-center text-gray-500'>
							Nous sommes des porteurs d&apos;idées
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-8'>
						<Image src={passion} alt='loyalty icon' />
						<h3 className='max-w-[15rem] text-center font-play-fair text-4xl font-bold text-urbain-white'>
							Passion pour le travail
						</h3>
						<span className='max-w-[11rem] text-center text-gray-500'>
							Nous sommes passionnés par le travail
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
