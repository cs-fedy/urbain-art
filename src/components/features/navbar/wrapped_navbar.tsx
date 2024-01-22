import logo from "@/../public/svg/horizontal_logo.svg"
import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ChevronDownIcon from "@/components/icons/chevron_down"
import Image from "next/image"
import { Categories } from "../categories/types"
import TopBar from "../top_bar"
import CategoriesMobileDropdown from "./categories_mobile_dropdown"
import Dropdown from "./dropdown"
import MobileMenu from "./mobile_menu"
import NavbarItem from "./navbar_item"
import Link from "next/link"

type WrappedNavbarProps = { categories: Categories }

export default function WrappedNavbar({ categories }: WrappedNavbarProps) {
	return (
		<div className='fixed inset-x-0 top-0 z-40 bg-urbain-black lg:bg-urbain-black/90'>
			<div className=' hidden lg:block'>
				<TopBar />
			</div>

			<div className='relative mx-auto flex w-11/12 items-center justify-between py-3 lg:w-10/12'>
				<Image src={logo} alt='urbain art logo' width={240} height={61} />

				<nav className='hidden items-center space-x-8 lg:flex'>
					<NavbarItem href='/'>Acceuil</NavbarItem>
					<NavbarItem>
						<div className='group relative'>
							<div className='flex items-center space-x-1'>
								<span className='text-sm'>nos produits</span>
								<Icon
									icon={<ChevronDownIcon />}
									className='h-4 w-4 text-urbain-white'
								/>
							</div>

							<div className='absolute top-0 hidden pt-12 group-hover:block'>
								<Dropdown categories={categories} />
							</div>
						</div>
					</NavbarItem>
					<NavbarItem href='/a_propos'>a propos</NavbarItem>
					<NavbarItem href='/services'>nos services</NavbarItem>
					<NavbarItem href='/contact'>contact</NavbarItem>
				</nav>

				<MobileMenu>
					<nav className='mx-auto my-16 flex w-10/12 flex-col space-y-10'>
						<NavbarItem href='/'>Acceuil</NavbarItem>
						<CategoriesMobileDropdown categories={categories} />
						<NavbarItem href='/a_propos'>a propos</NavbarItem>
						<NavbarItem href='/services'>nos services</NavbarItem>
						<NavbarItem href='/contact'>contact</NavbarItem>
					</nav>

					<div className='mx-auto w-11/12'>
						<Link href='/devis' className='w-full'>
							<Box component='span' variant='primary' className='w-full'>
								Demendez un devis
							</Box>
						</Link>
					</div>

					<TopBar />
				</MobileMenu>

				<div className='hidden items-center space-x-4 lg:flex lg:space-x-8'>
					<Link href='/devis'>
						<Box component='span' variant='primary'>
							Demendez un devis
						</Box>
					</Link>
				</div>
			</div>
		</div>
	)
}
