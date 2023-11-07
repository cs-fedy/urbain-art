import { listProducts } from "@/lib/api"
import ProductItem from "../product/product_item"
import PopularProductsWrapper from "./popular_products_wrapper"

export default async function PopularProducts() {
	const popularProducts = await listProducts()

	return (
		<PopularProductsWrapper>
			{popularProducts.ok &&
				popularProducts.data.products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
		</PopularProductsWrapper>
	)
}
