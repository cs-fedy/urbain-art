import { ComponentProps } from "react"
import cn from "@/utils/cn"

type TextAreaProps = ComponentProps<"textarea"> & { error?: string }

export default function TextArea({ className, error, ...rest }: TextAreaProps) {
	return (
		<div className='flex w-full flex-col items-start gap-y-1'>
			<textarea
				{...rest}
				rows={5}
				className={cn(
					"w-full bg-transparent px-4 py-2 outline-none placeholder:text-sm placeholder:text-gray-500 focus:bg-transparent",
					className,
				)}
			/>
			{error && <span className='text-sm text-red-700'>{error}</span>}
		</div>
	)
}
