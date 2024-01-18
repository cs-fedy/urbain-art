export default function Service({ img, title, description }: any) {
	return (
		<div
			className='flex h-[834px] w-[525px] flex-col   gap-10 bg-[#F9F9F9] '
			style={{
				boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			}}>
			<div
				className='h-[492px] '
				style={{
					backgroundImage: `url(${img}) `,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div>
				<h1 className='text-center font-play-fair  font-bold leading-normal text-[calc-(37px-1%)]'>
					{title}
				</h1>
				<p className='text-center font-montserrat font-light leading-normal text-[calc-(27px-1%)]'>
					{description}
				</p>
			</div>
		</div>
	)
}
