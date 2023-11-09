"use client"

import logo from "@/../public/svg/logo.svg"
import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ChevronDownIcon from "@/components/icons/chevron_down"
import MenuIcon from "@/components/icons/menu"
import ShoppingCartIcon from "@/components/icons/shopping_cart"
import XMarkIcon from "@/components/icons/x_mark"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Categories } from "../categories/types"
import CategoriesMobileDropdown from "./categories_mobile_dropdown"
import Dropdown from "./dropdown"
import NavbarItem from "./navbar_item"

type WrappedNavbarProps = { categories: Categories }

export default function WrappedNavbar({ categories }: WrappedNavbarProps) {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='fixed inset-x-0 top-0 z-40 bg-urbain-black lg:bg-urbain-black/90'>
			<div className='relative mx-auto flex w-11/12 items-center justify-between py-3 lg:w-10/12'>
				<Image src={logo} alt='urbain art logo' width={43} height={53} />

				<nav className='hidden items-center space-x-8 lg:flex'>
					<NavbarItem href='/'>Acceuil</NavbarItem>
					<NavbarItem>
						<div className='group relative'>
							<div className='flex items-center space-x-1'>
								<span className='text-sm'>no produits</span>
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
					<NavbarItem href='/about'>a propos</NavbarItem>
					<NavbarItem href='/catalog'>catalogue</NavbarItem>
					<NavbarItem href='/contact'>contact</NavbarItem>
				</nav>

				<div
					className={cn(
						isOpen ? "fixed" : "hidden",
						"inset-0 overflow-auto bg-urbain-black py-7 lg:hidden",
					)}>
					<div className='mx-auto flex w-11/12 justify-end'>
						<button type='button' onClick={() => setOpen(false)}>
							<Icon
								icon={<XMarkIcon />}
								className='h-6 w-6 text-urbain-white'
							/>
						</button>
					</div>

					<nav className='mx-auto my-16 flex w-10/12 flex-col space-y-10'>
						<NavbarItem href='/'>Acceuil</NavbarItem>
						<CategoriesMobileDropdown categories={categories} />
						<NavbarItem href='/about'>a propos</NavbarItem>
						<NavbarItem href='/catalog'>catalogue</NavbarItem>
						<NavbarItem href='/contact'>contact</NavbarItem>
					</nav>
				</div>

				<div className='flex items-center space-x-4 lg:space-x-8'>
					<Link href='/cart'>
						<Icon
							icon={<ShoppingCartIcon />}
							className='h-[26px] w-[27px] text-urbain-white lg:h-[34px] lg:w-[35px]'
						/>
					</Link>
					<Box component='button' variant='primary'>
						Demendez un devis
					</Box>

					<button
						type='button'
						className='lg:hidden'
						onClick={() => setOpen(true)}>
						<Icon icon={<MenuIcon />} className='h-6 w-6 text-urbain-white' />
					</button>
				</div>
			</div>
		</div>
	)
}
