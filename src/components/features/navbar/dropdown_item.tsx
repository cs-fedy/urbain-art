import Icon from "@/components/common/icon"
import ChevronRightIcon from "@/components/icons/chevron_right"
import Link from "next/link"
import { Category } from "../categories/types"

type DropdownItemProps = { category: Category }

export default function DropdownItem({ category }: DropdownItemProps) {
	return (
		<Link className='w-full' href={category.link}>
			<div className='group/sub-menu relative'>
				<div className='flex w-full items-center justify-between gap-x-10'>
					<span className='font-montserrat tracking-wide text-urbain-white hover:underline'>
						{category.title}
					</span>

					<Icon
						icon={<ChevronRightIcon />}
						className='h-3 w-3 text-urbain-orange'
					/>
				</div>

				<div className='absolute -top-3 left-full hidden pl-6 group-hover/sub-menu:block'>
					<div className='flex w-max flex-col items-start gap-y-6 bg-urbain-black px-6 py-3'>
						{category.items.map(item => (
							<Link
								key={item.id}
								href={item.link}
								className='font-montserrat tracking-wide text-urbain-white hover:underline'>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</Link>
	)
}
