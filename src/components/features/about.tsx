import about from "@/../public/images/about.jpg"
import grayLogo from "@/../public/svg/gray_logo.svg"
import Box from "@/components/common/box"
import Image from "next/image"

export default function About() {
	return (
		<div className='relative h-screen w-full overflow-hidden'>
			<div className='mx-auto flex h-full w-4/5 items-center justify-between py-16 pt-32'>
				<div className='absolute -bottom-28 -left-48 h-[54rem] w-[45rem]'>
					<Image src={grayLogo} alt='urbain art gray logo' fill />
				</div>

				<div className='flex flex-col items-start space-y-10'>
					<div className='flex flex-col items-start space-y-6'>
						<h2 className='max-w-2xl text-left font-play-fair text-6xl font-semibold leading-snug tracking-wider text-urbain-black'>
							<span className='font-black'>Embellissez</span> votre espace de
							travail avec les créations{" "}
							<span className='font-black'>d&apos;Urbain Art</span>.
						</h2>
						<p className='max-w-lg text-left font-montserrat text-lg font-normal leading-snug tracking-wider text-urbain-black'>
							Urbaint Art aménage et dynamise vos espaces de rencontres.
							Qu&apos;il s&apos;agisse de stands sur mesures, de show-room, de
							magasin, de Proshop ou de bureaux, notre Agence vous accompagne
							tout au long du processus de votre projet de la conceptualisation
							à la production.
						</p>
					</div>

					<Box variant='primary' component='a'>
						découvrez urbain art
					</Box>
				</div>

				<div className='relative'>
					<div className='absolute -inset-y-3 -left-10 right-2/3 bg-urbain-black' />
					<div className='absolute -bottom-2 -right-5 h-72 w-96 border-4 border-gray-200' />

					<div className='scale-90'>
						<Image src={about} alt='about image' width={770} height={784} />
					</div>
				</div>
			</div>
		</div>
	)
}
