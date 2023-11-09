import Image from "next/image"
import { Member } from "./types"

type TeamMemberProps = { member: Member }

export default function TeamMember({ member }: TeamMemberProps) {
	return (
		<div className='flex h-full w-full flex-col items-start overflow-hidden rounded-lg bg-white shadow-sm'>
			<div className='aspect-square overflow-hidden'>
				<Image
					src={member.image as string}
					alt={member.fullName}
					width={378}
					height={424}
				/>
			</div>

			<div className='flex w-full flex-col items-start space-y-2 p-4 font-medium'>
				<h3 className='font-montserrat text-lg text-urbain-black md:text-xl lg:text-2xl'>
					{member.fullName}
				</h3>
				<span className='text-sm text-urbain-black'>{member.position}</span>
			</div>
		</div>
	)
}
