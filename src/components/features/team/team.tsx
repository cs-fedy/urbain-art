import grayLogo from "@/../public/svg/gray_logo.svg"
import Box from "@/components/common/box"
import { listMembers } from "@/lib/api"
import Image from "next/image"
import TeamMember from "./team_member"

// TODO: make it responsive the members cards
export default async function Team() {
	const members = await listMembers({ limit: 4 })

	if (!members.ok) return <></>

	return (
		<div className='relative w-full overflow-hidden lg:h-screen'>
			<div className='mx-auto flex h-full w-4/5 flex-col items-center gap-y-12 py-16 lg:pt-32'>
				<div className='absolute -bottom-28 -left-48 hidden h-[54rem] w-[45rem] lg:block'>
					<Image src={grayLogo} alt='urbain art gray logo' fill />
				</div>

				<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-black sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
					<span className='font-black'>Equipe</span> Urbain Art
				</h2>

				<div className='flex w-full flex-col items-center gap-y-8'>
					<div className='hidden w-full grid-cols-4 justify-between lg:grid'>
						{members.data.members.map(member => (
							<TeamMember key={member.id} member={member} />
						))}
					</div>

					<Box component='a' href='/contact_us' variant='primary'>
						Contacter l’équipe
					</Box>
				</div>
			</div>
		</div>
	)
}
