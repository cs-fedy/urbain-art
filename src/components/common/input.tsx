import cn from "@/utils/cn"
import { ComponentProps } from "react"

type InputProps = ComponentProps<"input"> & { error?: string }

export default function Input({ className, error, ...rest }: InputProps) {
	return (
		<div className='flex w-full flex-col items-start gap-y-1'>
			<input
				{...rest}
				className={cn(
					"w-full bg-transparent px-4 py-2 outline-none placeholder:text-gray-500 focus:bg-transparent",
					className,
				)}
			/>
			<span className='text-sm text-red-700'>{error}</span>
		</div>
	)
}
