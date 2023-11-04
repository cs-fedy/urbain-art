import cn from "@/utils/cn"
import { ComponentProps } from "react"

export default function Input({ className, ...rest }: ComponentProps<"input">) {
	return (
		<input
			{...rest}
			className={cn(
				"w-full bg-transparent px-4 py-2 outline-none placeholder:text-gray-500",
				className,
			)}
		/>
	)
}
