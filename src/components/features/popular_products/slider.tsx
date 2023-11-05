"use client"

import Icon from "@/components/common/icon"
import ArrowLongLeft from "@/components/icons/arrow_long_left"
import ArrowLongRight from "@/components/icons/arrow_long_right"
import { Children, PropsWithChildren, useState } from "react"

type SliderProps = { itemsPerWindow: number }

// TODO: FIX THIS - make it responsive using a better solution
export default function Slider({
	itemsPerWindow,
	children,
}: PropsWithChildren<SliderProps>) {
	const [offset, setOffset] = useState(0)
	const items = Children.toArray(children)

	const handleChangeOffset = (direction: 1 | -1) =>
		setOffset(prev => {
			if (direction === -1) {
				const newOffset = prev - itemsPerWindow
				if (newOffset < 0) return 0
				return newOffset
			}

			if (direction === 1) {
				const newOffset = prev + itemsPerWindow
				if (newOffset > items.length) return items.length - itemsPerWindow - 1
				return newOffset
			}

			return prev
		})

	return (
		<div className='relative z-10 flex w-full flex-col items-end space-y-4 lg:ml-20'>
			<div className='mx-auto grid w-3/5 grid-cols-1 gap-4 lg:w-full lg:grid-cols-4'>
				{items.slice(offset, offset + itemsPerWindow).map(child => child)}
			</div>
			<div className='hidden h-4 w-full rounded-md bg-urbain-black lg:block' />
			<div className='absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between space-x-2 px-8 lg:static lg:translate-y-0'>
				<button
					onClick={() => handleChangeOffset(-1)}
					className='flex h-10 w-10 items-center justify-center rounded-full bg-urbain-black hover:bg-slate-900'>
					<Icon
						icon={<ArrowLongLeft />}
						className='h-4 w-4 text-urbain-white'
					/>
				</button>
				<button
					onClick={() => handleChangeOffset(1)}
					className='flex h-10 w-10 items-center justify-center rounded-full border border-urbain-black bg-urbain-white hover:bg-slate-100'>
					<Icon icon={<ArrowLongRight />} className='h-4 w-4' />
				</button>
			</div>
		</div>
	)
}
