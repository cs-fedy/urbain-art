"use client"

import cn from "@/utils/cn"
import { usePathname } from "next/navigation"
import { ComponentProps, PropsWithChildren } from "react"

export default function NavbarItem({
	children,
	href,
	className,
	...rest
}: PropsWithChildren<ComponentProps<"a">>) {
	const pathname = usePathname()

	return (
		<a
			href={href}
			className={cn(
				"border-urbain-orange font-montserrat text-sm font-normal capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:border-b-4",
				pathname === href && "border-b-4",
				className,
			)}
			{...rest}>
			{children}
		</a>
	)
}
