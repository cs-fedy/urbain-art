import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import LinkedinIcon from "@/components/icons/linkedin"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import Link from "next/link"
import Icon from "../common/icon"
import SearchBox from "./search_box/search_box"

export default function TopBar() {
	return (
		<div className='mx-auto flex w-11/12 flex-col items-center justify-between gap-y-5 py-3 lg:w-10/12 lg:flex-row'>
			<div className='w-full lg:w-2/5'>
				<SearchBox />
			</div>

			<div className='flex w-full items-center gap-x-10 lg:w-auto'>
				<div className='ml-5 flex items-center gap-x-4'>
					<Link href='/'>
						<Icon
							icon={<FacebookIcon />}
							className='h-[28px] w-[27px] text-urbain-white'
						/>
					</Link>
					<Link href='/'>
						<Icon
							icon={<InstagramIcon />}
							className='h-[27px] w-[27px] text-urbain-white'
						/>
					</Link>
					<Link href='/'>
						<Icon
							icon={<LinkedinIcon />}
							className='h-[27px] w-[28px] text-urbain-white'
						/>
					</Link>
				</div>

				<Link href='/cart'>
					<Icon
						icon={<ShoppingCartIcon />}
						className='h-[26px] w-[27px] text-urbain-white lg:h-[34px] lg:w-[35px]'
					/>
				</Link>
			</div>
		</div>
	)
}
