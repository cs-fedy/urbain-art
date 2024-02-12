import useOnClickOutside from "@/components/hooks/use-on-click-outside"
import Image from "next/image"
import React from "react"

type FullModeImageProps = {
	close: () => void
	image: string
	title: string
}

export default function FullModeImage({
	close,
	image,
	title,
}: FullModeImageProps) {
	const ref = useOnClickOutside<HTMLImageElement>({ handler: close })

	return (
		<div className='fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-urbain-black/80'>
			<Image ref={ref} src={image} alt={title} width={1280} height={720} />
		</div>
	)
}
