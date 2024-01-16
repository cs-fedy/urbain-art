import cn from "@/utils/cn"
import { ComponentProps, ElementType, PropsWithChildren } from "react"

type AsProps<T extends ElementType> = {
	variant?: "primary" | "secondary"
	component: T
}

type BoxProps<T extends ElementType> = PropsWithChildren<AsProps<T>> &
	Omit<ComponentProps<T>, keyof AsProps<T>>

export default function Box<T extends ElementType = "span">({
	children,
	className,
	variant,
	component,
	...rest
}: BoxProps<T>) {
	const Component = component as ElementType

	return (
		<Component
			{...rest}
			className={cn(
				"flex items-center space-x-3 rounded-md px-6 py-3 font-montserrat text-xs font-normal leading-normal tracking-normal text-urbain-white lg:text-sm",
				variant === "primary" && "bg-urbain-orange hover:bg-orange-700",
				variant === "secondary" && "bg-urbain-black hover:bg-slate-900",
				className,
			)}>
			{children}
		</Component>
	)
}
