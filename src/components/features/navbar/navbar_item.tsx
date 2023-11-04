import cn from "@/utils/cn"
import { ComponentProps, PropsWithChildren } from "react"

export default function NavbarItem({
	children,
	href,
	className,
	...rest
}: PropsWithChildren<ComponentProps<"a">>) {
	return (
		<a
			href={href}
			className={cn(
				"border-urbain-orange px-2 font-montserrat text-sm font-normal capitalize leading-snug tracking-wider text-urbain-white duration-200 ease-in-out hover:border-b-4",
				className,
			)}
			{...rest}>
			{children}
		</a>
	)
}
