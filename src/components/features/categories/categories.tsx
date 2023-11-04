import coatRack from "@/../public/svg/coat_rack.svg"
import desk from "@/../public/svg/desk.svg"
import homeTable from "@/../public/svg/home_table.svg"
import officeChairThin from "@/../public/svg/office_chair_thin.svg"
import roundedDesk from "@/../public/svg/rounded_desk.svg"
import twoDoorsThin from "@/../public/svg/two_doors_thin.svg"
import Image from "next/image"

export default function Categories() {
	return (
		<div className='fixed inset-y-0 right-0 z-10 bg-urbain-black'>
			<div className='flex flex-col items-center justify-start space-y-16 px-5 pb-16 pt-32'>
				<button type='button'>
					<Image src={desk} alt='desk icon' width={63} height={28} />
				</button>
				<button type='button'>
					<Image src={homeTable} alt='home table icon' width={63} height={28} />
				</button>
				<button type='button'>
					<Image
						src={roundedDesk}
						alt='rounded desk icon'
						width={54}
						height={54}
					/>
				</button>
				<button type='button'>
					<Image
						src={officeChairThin}
						alt='office chair thin icon'
						width={54}
						height={73}
					/>
				</button>
				<button type='button'>
					<Image
						src={twoDoorsThin}
						alt='two doors thin icon'
						width={56}
						height={58}
					/>
				</button>
				<button type='button'>
					<Image src={coatRack} alt='coat rack icon' width={54} height={77} />
				</button>
			</div>
		</div>
	)
}
