import logo from "@/../public/svg/logo.svg"
import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import ChevronDownIcon from "@/components/icons/chevron_down"
import Image from "next/image"
import NavbarItem from "./navbar_item"

export default function Navbar() {
	return (
		<div className='fixed inset-x-0 top-0 z-20 bg-urbain-black/90'>
			<div className='mx-auto flex w-10/12 items-center justify-between py-3'>
				<Image src={logo} alt='urbain art logo' width={43} height={53} />

				<nav className='flex items-center space-x-8'>
					<NavbarItem href='/'>Acceuil</NavbarItem>
					<NavbarItem href='/products'>
						<div className='flex items-center space-x-1'>
							<span className='text-sm'>no produits</span>
							<Icon
								icon={<ChevronDownIcon />}
								className='h-4 w-4 text-urbain-white'
							/>
						</div>
					</NavbarItem>
					<NavbarItem href='/about'>a propos</NavbarItem>
					<NavbarItem href='/catalog'>catalogue</NavbarItem>
					<NavbarItem href='/contact'>contact</NavbarItem>
				</nav>

				<Box component='button' variant='primary'>
					Demendez un devis
				</Box>
			</div>
		</div>
	)
}
