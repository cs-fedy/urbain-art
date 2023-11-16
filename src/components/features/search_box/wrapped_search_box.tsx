import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import Input from "@/components/common/input"
import MagnifyingGlassIcon from "@/components/icons/magnifying-glass"

export default function WrappedSearchBox() {
	return (
		<form className='relative flex w-full items-center'>
			<Input
				name='search'
				placeholder='Rechercher des produits'
				type='text'
				className='w-full rounded-lg text-white lg:w-max'
			/>

			<Box type='submit' className='p-2' component='button' variant='primary'>
				<Icon
					icon={<MagnifyingGlassIcon />}
					className='h-6 w-6  text-urbain-white'
				/>
			</Box>
		</form>
	)
}
