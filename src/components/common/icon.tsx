import cn from "@/utils/cn"
import { ClassName } from "@/utils/types"
import { ReactNode } from "react"

type IconProps = {
	icon: ReactNode
	className?: ClassName
}

export default function Icon({ icon, className }: IconProps) {
	return (
		<div className={cn("h-5 w-5 text-urbain-black", className)}>{icon}</div>
	)
}
