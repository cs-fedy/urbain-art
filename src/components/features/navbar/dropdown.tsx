import { Categories } from "../categories/types"
import DropdownItem from "./dropdown_item"

type DropdownProps = { categories: Categories }

export default function Dropdown({ categories }: DropdownProps) {
	return (
		<div className='flex w-max flex-col items-start gap-y-6 bg-urbain-black px-6 py-3'>
			{categories.map(category => (
				<DropdownItem category={category} key={category.id} />
			))}
		</div>
	)
}
