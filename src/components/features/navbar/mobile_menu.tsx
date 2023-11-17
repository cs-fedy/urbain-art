"use client"

import Icon from "@/components/common/icon"
import MenuIcon from "@/components/icons/menu"
import XMarkIcon from "@/components/icons/x_mark"
import cn from "@/utils/cn"
import { PropsWithChildren, useState } from "react"

export default function MobileMenu({ children }: PropsWithChildren) {
	const [isOpen, setOpen] = useState(false)

	return (
		<div>
			<button type='button' className='lg:hidden' onClick={() => setOpen(true)}>
				<Icon icon={<MenuIcon />} className='h-6 w-6 text-urbain-white' />
			</button>

			<div
				className={cn(
					isOpen ? "fixed" : "hidden",
					"inset-0 overflow-auto bg-urbain-black py-7 lg:hidden",
				)}>
				<div className='mx-auto flex w-11/12 justify-end'>
					<button type='button' onClick={() => setOpen(false)}>
						<Icon icon={<XMarkIcon />} className='h-6 w-6 text-urbain-white' />
					</button>
				</div>

				{children}
			</div>
		</div>
	)
}
