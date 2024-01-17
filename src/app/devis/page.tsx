import PriceEstimationForm from "@/components/features/price_estimation/price-estimation-form"

export default function DevisPage() {
	return (
		<div className='mx-auto mt-28 w-10/12 lg:mb-10 lg:mt-48'>
			<h2 className='mb-16 w-full text-center font-play-fair text-2xl leading-snug tracking-wider text-urbain-black md:text-3xl lg:text-4xl'>
				Demande de devis <br />
				personnalisé
			</h2>

			<PriceEstimationForm />
		</div>
	)
}
