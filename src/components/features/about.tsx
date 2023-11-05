import about from "@/../public/images/about.jpg"
import grayLogo from "@/../public/svg/gray_logo.svg"
import Box from "@/components/common/box"
import Image from "next/image"

export default function About() {
	return (
		<div className='relative w-full overflow-hidden lg:h-screen'>
			<div className='mx-auto flex h-full w-4/5 flex-col items-center justify-between gap-y-12 py-16 lg:flex-row lg:pt-32'>
				<div className='absolute -bottom-28 -left-48 hidden h-[54rem] w-[45rem] lg:block'>
					<Image src={grayLogo} alt='urbain art gray logo' fill />
				</div>

				<div className='flex flex-col items-center gap-y-10 lg:items-start'>
					<div className='flex flex-col items-center gap-y-6 lg:items-start'>
						<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
							<span className='font-black'>Embellissez</span> votre espace de
							travail avec les créations{" "}
							<span className='font-black'>d&apos;Urbain Art</span>.
						</h2>

						<p className='w-full text-center text-sm text-urbain-black md:text-base lg:max-w-lg lg:text-left'>
							Urbaint Art aménage et dynamise vos espaces de rencontres.
							Qu&apos;il s&apos;agisse de stands sur mesures, de show-room, de
							magasin, de Proshop ou de bureaux, notre Agence vous accompagne
							tout au long du processus de votre projet de la conceptualisation
							à la production.
						</p>
					</div>

					<Box variant='primary' className='w-full lg:w-max' component='a'>
						<span className='w-full text-center'>découvrez urbain art</span>
					</Box>
				</div>

				<div className='relative'>
					<div className='absolute -inset-y-3 -left-5 right-2/3 bg-urbain-black lg:-left-10' />
					<div className='absolute -bottom-2 -right-5 h-56 w-40 border-4 border-gray-200 lg:h-72 lg:w-96' />

					<div className='scale-90'>
						<Image src={about} alt='about image' width={770} height={784} />
					</div>
				</div>
			</div>
		</div>
	)
}
