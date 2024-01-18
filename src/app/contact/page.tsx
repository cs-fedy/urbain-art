import ContactDetails from "@/components/features/contact/contact-details"
import Newsletter from "@/components/features/newsletter/newsletter"
import Contact from "@/components/features/contact/contact"

export default function ContactPage() {
	return (
		<div className='w-full'>
			<div className='relative mx-auto mb-10 mt-44 w-10/12 xl:w-8/12'>
				<div className='flex w-full flex-col items-start lg:flex-row'>
					<ContactDetails />
					<div className='flex w-full flex-col items-start gap-14 bg-urbain-black px-12 py-8 lg:w-1/2 lg:px-24 lg:py-16'>
						<h2 className='w-full text-center font-play-fair text-2xl leading-snug tracking-wider text-urbain-white md:text-3xl lg:max-w-2xl lg:text-4xl'>
							Contactez-nous
						</h2>
						<Contact />
					</div>
				</div>
			</div>
			<Newsletter />
		</div>
	)
}
