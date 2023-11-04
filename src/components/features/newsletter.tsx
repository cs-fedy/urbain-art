import newsletter from "@/../public/images/newsletter.jpg"
import Box from "@/components/common/box"
import Input from "@/components/common/input"
import Image from "next/image"

export default function Newsletter() {
	return (
		<div className='relative flex w-full items-center bg-urbain-black'>
			<div className='w-1/2'>
				<Image
					src={newsletter}
					alt='newsletter image'
					width={960}
					height={600}
				/>
			</div>
			<div className='mx-20 flex flex-col items-start space-y-12'>
				<div className='flex flex-col items-start space-y-2'>
					<h2 className='max-w-2xl font-play-fair text-6xl leading-snug tracking-wider text-urbain-white'>
						Rejoignez notre Newsletter
					</h2>
					<span className='max-w-lg text-urbain-white'>
						Recevez nos nouveautés, nos actualités ainsi que nos évènements.
					</span>
				</div>
				<div className='flex w-3/4 flex-col items-start space-y-8'>
					<Input
						type='email'
						name='email'
						placeholder='Enter your email'
						className='rounded-lg text-white'
					/>
					<Box
						component='button'
						className='bg-urbain-white text-urbain-black hover:bg-slate-100'>
						S’inscrire
					</Box>
				</div>
			</div>
		</div>
	)
}
