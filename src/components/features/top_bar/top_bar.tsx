import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import LinkedinIcon from "@/components/icons/linkedin"
import Link from "next/link"
import Icon from "../../common/icon"
import SearchBox from "../search_box/search_box"
import ShoppingIcon from "@/components/features/top_bar/shopping-icon"

export default function TopBar() {
	return (
		<div className='mx-auto flex w-11/12 flex-col items-center justify-between gap-y-5 py-3 lg:w-10/12 lg:flex-row'>
			<div className='w-full text-urbain-white lg:w-2/5'>
				<SearchBox />
			</div>

			<div className='flex w-full items-center gap-x-10 lg:w-auto'>
				<div className='ml-5 flex items-center gap-x-4'>
					<Link href='/public'>
						<Icon
							icon={<FacebookIcon />}
							className='h-[28px] w-[27px] text-urbain-white'
						/>
					</Link>
					<Link href='/public'>
						<Icon
							icon={<InstagramIcon />}
							className='h-[27px] w-[27px] text-urbain-white'
						/>
					</Link>
					<Link href='/public'>
						<Icon
							icon={<LinkedinIcon />}
							className='h-[27px] w-[28px] text-urbain-white'
						/>
					</Link>
				</div>

				<ShoppingIcon />
			</div>
		</div>
	)
}
