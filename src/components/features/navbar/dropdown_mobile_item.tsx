import Icon from "@/components/common/icon"
import MinusIcon from "@/components/icons/minus"
import PlusIcon from "@/components/icons/plus"
import { PropsWithChildren } from "react"

type DropdownMobileItemProps = {
	expandable: boolean
	toggle?: () => void
	isOpen?: boolean
}

export default function DropdownMobileItem({
	expandable,
	toggle,
	isOpen,
	children,
}: PropsWithChildren<DropdownMobileItemProps>) {
	return (
		<div className='flex w-full items-center justify-between'>
			{children}

			{expandable && (
				<button type='button' onClick={() => toggle?.()}>
					<Icon
						icon={isOpen ? <MinusIcon /> : <PlusIcon />}
						className='h-4 w-4 text-urbain-white'
					/>
				</button>
			)}
		</div>
	)
}
