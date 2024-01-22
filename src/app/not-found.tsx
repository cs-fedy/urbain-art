import Box from "@/components/common/box"

export default function NotFoundPage() {
	return (
		<div className='mx-auto mb-10 mt-28 flex flex-col items-center gap-10 lg:mb-10 lg:mt-48'>
			<h1 className='w-max text-center font-play-fair text-3xl font-bold leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:text-left lg:text-6xl'>
				Page non trouvée – 404!
			</h1>

			<Box component='a' variant='primary' href='/'>
				Retourner à la page d&apos;accueil !
			</Box>
		</div>
	)
}
