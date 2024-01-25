"use client"

import { Cart as TCart, CartItem } from "@/components/features/cart/types"
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react"

type CartStore = {
	cart: TCart
	clear: () => void
	deleteItem: (tag: string) => void
	getItem: (tag: string) => CartItem | undefined
	saveItem: (item: CartItem) => void
}

const CartContext = createContext({} as CartStore)

export function useCart() {
	return useContext(CartContext)
}

export default function CartProvider({ children }: PropsWithChildren) {
	const [cart, setCart] = useState<TCart>([])

	useEffect(() => {
		const cart = localStorage.getItem("cart")

		if (cart) {
			try {
				setCart(
					JSON.parse(cart).map((item: any) => {
						return {
							tag: item.tag,
							count: item.count,
						}
					}) as TCart,
				)
			} catch (e) {
				localStorage.removeItem("cart")
			}
		}
	}, [])

	const handleDelete = useCallback((tag: string) => {
		setCart(prev => {
			const filteredCart = prev.filter(item => item.tag !== tag)
			localStorage.setItem("cart", JSON.stringify(filteredCart))
			return filteredCart
		})
	}, [])

	const getItem = useCallback(
		(tag: string) => {
			return cart.find(item => item.tag === tag)
		},
		[cart],
	)

	const handleSaveItem = useCallback((item: CartItem) => {
		setCart(prev => {
			const isExist = !!prev.find(curr => item.tag === curr.tag)
			let updatedCart = [...prev]
			if (!isExist) updatedCart = [...prev, { ...item }]
			updatedCart = updatedCart.map(curr =>
				curr.tag === item.tag ? { ...curr, ...item } : curr,
			)

			localStorage.setItem("cart", JSON.stringify(updatedCart))
			return updatedCart
		})
	}, [])

	const handleClearCart = useCallback(() => {
		setCart([])
		localStorage.setItem("cart", JSON.stringify([]))
	}, [])

	return (
		<CartContext.Provider
			value={{
				cart,
				clear: handleClearCart,
				deleteItem: handleDelete,
				saveItem: handleSaveItem,
				getItem,
			}}>
			{children}
		</CartContext.Provider>
	)
}
