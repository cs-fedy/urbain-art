type ParsedCart = Array<{
	tag: string
	count: number
}>

const handleSyncCart = (tag: string, count: number) => {
	const cart = localStorage.getItem("cart")

	if (!cart)
		return localStorage.setItem("cart", JSON.stringify([{ tag, count }]))

	try {
		const parsedCart = JSON.parse(cart) as ParsedCart

		const foundProduct = parsedCart.find(item => item.tag === tag)

		if (!foundProduct)
			return localStorage.setItem(
				"cart",
				JSON.stringify([...parsedCart, { tag, count }]),
			)

		return localStorage.setItem(
			"cart",
			JSON.stringify(
				parsedCart.map(item => (item.tag === tag ? { tag, count } : item)),
			),
		)
	} catch (e) {
		localStorage.removeItem("cart")
	}
}

export default handleSyncCart
