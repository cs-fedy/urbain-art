import cn from "@/utils/cn"

type SliderDotProps = { isCurrent: boolean }

export default function SliderDot({ isCurrent }: SliderDotProps) {
	return (
		<div
			className={cn(
				"h-4 w-4 rounded-full",
				isCurrent ? "bg-urbain-orange" : "bg-urbain-white",
			)}
		/>
	)
}
