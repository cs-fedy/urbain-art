import cn from "@/utils/cn"
import { ComponentProps, ReactNode } from "react"

type IconProps = {
	icon: ReactNode
	className?: ComponentProps<"span">["className"]
}

export default function Icon({ icon, className }: IconProps) {
	return (
		<div className={cn("h-5 w-5 text-urbain-black", className)}>{icon}</div>
	)
}
