import Box from "@/components/common/box"
import Slider from "@/components/common/slider"
import Service from "@/components/features/Service"
import Newsletter from "@/components/features/newsletter/newsletter"

let SERVICES = [
	{
		img: "/images/service_one.jpg",
		title: "Agencement personnalisé d'espaces.",
		description:
			"Création de solutions sur mesure pour optimiser votre espace.",
	},
	{
		img: "/images/service_two.jpg",
		title: "Installation de mobilier de bureau",
		description:
			"Fourniture et montage de mobilier de qualité pour un environnement detravail efficace.",
	},
	{
		img: "/images/service_three.jpg",
		title: "Conception d'espaces de réunion",
		description:
			" Aménagement de salles de réunion fonctionnelles et esthétiques pour vosbesoins professionnels.",
	},
]

export default function ServicePage() {
	return (
		<div className='mt-28 w-full lg:mt-48'>
			<div className='mx-auto w-10/12'>
				<div className='hidden justify-around gap-4 lg:flex'>
					{SERVICES.map(service => (
						<Service key={service.img} {...service} />
					))}
				</div>

				<div className='block lg:hidden'>
					<Slider itemsPerWindow={1}>
						{SERVICES.map(service => (
							<Service key={service.img} {...service} />
						))}
					</Slider>
				</div>

				<div className='my-12 flex w-full items-center justify-center gap-x-4 px-2 py-1'>
					<Box
						variant='primary'
						className='text-center'
						component='a'
						href='/devis'>
						Demander un devis
					</Box>
					<Box
						variant='secondary'
						className='text-center'
						component='a'
						href='/devis'>
						Télécharger le catalogue
					</Box>
				</div>
			</div>
			<Newsletter />
		</div>
	)
}
