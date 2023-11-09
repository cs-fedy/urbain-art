import customize from "@/../public/svg/customize.svg"
import desk from "@/../public/svg/desk.svg"
import sitemap from "@/../public/svg/sitemap.svg"
import Image from "next/image"

export default function Services() {
	return (
		<div className='relative w-full overflow-hidden bg-urbain-black bg-no-repeat pt-[4.75rem] lg:min-h-screen lg:bg-services lg:pt-0'>
			<div className='absolute inset-0 z-10 bg-urbain-black/80' />

			<div className='relative z-20 mx-auto flex h-full w-4/5 flex-col items-center gap-y-16 py-16 lg:pt-32'>
				<div className='flex flex-col items-center gap-y-10'>
					<h1 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-white sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-6xl'>
						A propos Urbain Art
					</h1>

					<p className='max-w-2xl text-center text-sm text-gray-400 md:text-base'>
						Urban Art s&apos;engage à transformer et revitaliser vos espaces de
						rencontre. Que vous ayez besoin de stands sur mesure, de show-rooms,
						de boutiques, de Proshops ou de bureaux, notre agence vous guide à
						chaque étape de votre projet, de la phase de conception à la
						réalisation.
					</p>
				</div>

				<div className='grid w-full grid-cols-1 items-baseline justify-items-center gap-y-10 lg:grid-cols-3'>
					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image
								src={customize}
								alt='customize icon'
								width={68}
								height={66}
							/>
						</div>
						<h3 className='text-center font-play-fair text-2xl font-bold text-urbain-orange md:text-3xl lg:text-4xl'>
							Conception sur mesure
						</h3>
						<span className='max-w-xs text-center text-sm text-gray-400 md:text-base'>
							Création des concepts uniques et adaptés à vos besoins
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image src={sitemap} alt='sitemap icon' width={68} height={66} />
						</div>
						<h3 className='text-center font-play-fair text-2xl font-bold text-urbain-orange md:text-3xl lg:text-4xl'>
							Gestion de projet
						</h3>
						<span className='max-w-xs text-center text-sm text-gray-400 md:text-base'>
							Création des concepts uniques et adaptés à vos besoins
						</span>
					</div>

					<div className='flex max-w-max flex-col items-center space-y-4 lg:space-y-8'>
						<div className='flex aspect-video w-full scale-75 justify-center lg:scale-100'>
							<Image src={desk} alt='desk icon' width={100} height={44} />
						</div>
						<h3 className='text-center font-play-fair text-2xl font-bold text-urbain-orange md:text-3xl lg:text-4xl'>
							Production de qualité
						</h3>
						<span className='max-w-xs text-center text-sm text-gray-400 md:text-base'>
							Nous mettons en œuvre les projets avec une attention méticuleuse
							aux détails.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
