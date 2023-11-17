"use client"

import Box from "@/components/common/box"
import Icon from "@/components/common/icon"
import Input from "@/components/common/input"
import MagnifyingGlassIcon from "@/components/icons/magnifying-glass"
import { useFormState } from "react-dom"

type WrappedSearchBoxProps = {
	query?: string
	formAction: (state: any, formData: FormData) => Promise<void>
}

const initialValue = { query: null }

export default function WrappedSearchBox({
	query,
	formAction,
}: WrappedSearchBoxProps) {
	const [state, action] = useFormState(formAction, initialValue)

	return (
		<form action={action} className='relative flex w-full items-center'>
			<Input
				name='query'
				defaultValue={query ?? ""}
				placeholder='Rechercher des produits'
				type='text'
				className='w-full rounded-lg text-inherit lg:w-max'
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
