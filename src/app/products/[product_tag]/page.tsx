import { getProduct } from "@/lib/api"
import ProductDetails from "@/components/features/product/product-details"

type ProductPageProps = {
	params: { product_tag: string }
}

export default async function ProductPage({
	params: { product_tag },
}: ProductPageProps) {
	const product = await getProduct({ productTag: product_tag })

	// TODO: show not found page
	if (!product.ok) return <></>

	return <ProductDetails product={product.data.product} />
}
