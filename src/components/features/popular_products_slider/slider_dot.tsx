import cn from "@/utils/cn"

type SliderDotProps = { isCurrent: boolean }

export default function SliderDot({ isCurrent }: SliderDotProps) {
	return (
		<div
			className={cn(
				"h-2 w-2 rounded-full lg:h-4 lg:w-4",
				isCurrent ? "bg-urbain-orange" : "bg-urbain-white",
			)}
		/>
	)
}
