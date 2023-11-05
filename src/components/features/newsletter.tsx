import newsletter from "@/../public/images/newsletter.jpg"
import Box from "@/components/common/box"
import Input from "@/components/common/input"
import Image from "next/image"

export default function Newsletter() {
	return (
		<div className='relative flex w-full flex-col-reverse items-center gap-y-16 bg-urbain-black lg:flex-row'>
			<div className='w-full lg:w-1/2'>
				<Image
					src={newsletter}
					alt='newsletter image'
					className='object-contain'
					width={960}
					height={600}
				/>
			</div>

			<div className='mx-20 flex flex-col items-center gap-y-12 py-10 lg:items-start lg:py-0'>
				<div className='flex flex-col items-center space-y-2 lg:items-start'>
					<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-white sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
						Rejoignez notre Newsletter
					</h2>
					<span className='w-full text-center text-sm text-urbain-white md:text-base lg:max-w-lg lg:text-left'>
						Recevez nos nouveautés, nos actualités ainsi que nos évènements.
					</span>
				</div>

				<div className='flex w-full flex-col items-center space-y-8 lg:w-3/4 lg:items-start'>
					<Input
						type='email'
						name='email'
						placeholder='Enter your email'
						className='w-full rounded-lg text-white lg:w-max'
					/>
					<Box
						component='button'
						className='w-full bg-urbain-white text-urbain-black hover:bg-slate-100 lg:w-max'>
						<span className='w-full text-center'>S’inscrire</span>
					</Box>
				</div>
			</div>
		</div>
	)
}
