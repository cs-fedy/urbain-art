export default function Service({ img, title, description }: any) {
	return (
		<div className='flex w-full flex-col gap-6'>
			<div>
				<div
					className='h-96 w-auto'
					style={{
						backgroundImage: `url(${img}) `,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			</div>
			<h2 className='w-full text-center font-play-fair text-2xl font-bold leading-snug tracking-wider text-urbain-black'>
				{title}
			</h2>
			<p className='px-10 text-center font-montserrat font-light leading-normal'>
				{description}
			</p>
		</div>
	)
}
