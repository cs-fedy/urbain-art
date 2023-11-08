import { Member } from "./types"

type TeamMemberProps = { member: Member }

export default function TeamMember({ member }: TeamMemberProps) {
	console.log(member)
	return <div>{member.fullName}</div>
}
