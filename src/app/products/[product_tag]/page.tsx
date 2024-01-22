import { getProduct } from "@/lib/api"
import ProductDetails from "@/components/features/product/product-details"
import { notFound } from "next/navigation"

type ProductPageProps = {
	params: { product_tag: string }
}

export default async function ProductPage({
	params: { product_tag },
}: ProductPageProps) {
	const product = await getProduct({ productTag: product_tag })
	if (!product.ok) return notFound()

	return <ProductDetails product={product.data.product} />
}
