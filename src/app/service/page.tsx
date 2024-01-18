import Box from "@/components/common/box"
import Slider from "@/components/common/slider"
import Service from "@/components/features/Service"
import Newsletter from "@/components/features/newsletter/newsletter"

let SERVICES = [
	{
		img: "images/s-1.jpeg",
		title: "Agencement personnalisé d'espaces.",
		description:
			"Création de solutions sur mesure pour optimiser votre espace.",
	},
	{
		img: "images/s-2.jpeg",
		title: "Installation de mobilier de bureau",
		description:
			"Fourniture et montage de mobilier de qualité pour un environnement detravail efficace.",
	},
	{
		img: "images/s-3.jpeg",
		title: "Conception d'espaces de réunion",
		description:
			" Aménagement de salles de réunion fonctionnelles et esthétiques pour vosbesoins professionnels.",
	},
]

export default function ServicePage() {
	return (
		<div className='mx-auto mt-28 w-10/12 lg:mb-10 lg:mt-48'>
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
			<div className='my-[40px] flex flex-col justify-center gap-10 lg:flex-row'>
				<Box
					variant='primary'
					component='a'
					className='h-[25px] w-[141px] lg:block lg:h-[81px] lg:w-[318px]'
					href={`/`}>
					Demander un devis
				</Box>
				<Box
					variant='secondary'
					component='a'
					className='h-[25px] w-[141px] py-[] lg:block lg:h-[81px] lg:w-[318px]'
					href={`/`}>
					Télécharger le catalogue
				</Box>
			</div>
			<Newsletter />
		</div>
	)
}
