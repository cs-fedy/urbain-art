"use client"

import { ChangeEvent, useCallback, useRef } from "react"
import { FileDetails } from "@/lib/types"

type UploadFileProps = {
	setFile: (file: File) => void
	fileDetails?: FileDetails
}

export default function UploadFile({ setFile, fileDetails }: UploadFileProps) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { files } = event.target
			if (files && files.length > 0)
				setFile(new File([files[0]], files[0].name))
		},
		[setFile],
	)

	return (
		<>
			<input
				type='file'
				className='hidden'
				ref={fileInputRef}
				onChange={handleFileInputChange}
			/>

			<button
				type='button'
				className='h-full w-full rounded-md border border-dashed border-gray-300 bg-white p-3 text-gray-500 shadow-sm duration-300 ease-out hover:border-gray-900'
				onClick={() => fileInputRef.current?.click()}>
				<span className='w-10/12 truncate text-sm font-bold capitalize text-gray-900'>
					{!fileDetails && "télécharger le fichier"}
					{fileDetails && (
						<a
							href={fileDetails.url}
							download={fileDetails.name}
							className='hover:underline'
							onClick={e => e.stopPropagation()}>
							{fileDetails.name}
						</a>
					)}
				</span>
			</button>
		</>
	)
}
