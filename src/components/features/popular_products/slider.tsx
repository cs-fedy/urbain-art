"use client"

import Icon from "@/components/common/icon"
import ArrowLongLeft from "@/components/icons/arrow_long_left"
import ArrowLongRight from "@/components/icons/arrow_long_right"
import rotate from "@/utils/rotate"
import { Children, PropsWithChildren, useState } from "react"

type SliderProps = { itemsPerWindow: number }

// TODO: fix this
export default function Slider({
	itemsPerWindow,
	children,
}: PropsWithChildren<SliderProps>) {
	const [direction, setDirection] = useState<1 | -1 | 0>(0)
	const items = Children.toArray(children)

	return (
		<div className='relative z-10 ml-20 flex w-full flex-col items-end space-y-4'>
			<div className='grid grid-cols-4 gap-4'>
				{rotate(items, direction)
					.slice(0, itemsPerWindow)
					.map(child => child)}
			</div>
			<div className='h-4 w-full rounded-md bg-urbain-black' />
			<div className='flex w-full items-center justify-end space-x-2'>
				<button
					onClick={() => setDirection(-1)}
					className='flex h-10 w-10 items-center justify-center rounded-full bg-urbain-black hover:bg-slate-900'>
					<Icon
						icon={<ArrowLongLeft />}
						className='h-4 w-4 text-urbain-white'
					/>
				</button>
				<button
					onClick={() => setDirection(1)}
					className='flex h-10 w-10 items-center justify-center rounded-full border border-urbain-black bg-urbain-white hover:bg-slate-100'>
					<Icon icon={<ArrowLongRight />} className='h-4 w-4' />
				</button>
			</div>
		</div>
	)
}
