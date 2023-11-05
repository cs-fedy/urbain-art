import productFour from "@/../public/images/product_four.jpg"
import productOne from "@/../public/images/product_one.jpg"
import productThree from "@/../public/images/product_three.jpg"
import productTwo from "@/../public/images/product_two.jpg"
import PopularProductsWrapper from "./popular_products_wrapper"
import ProductItem from "./product_item"

export default function PopularProducts() {
	return (
		<PopularProductsWrapper>
			<ProductItem
				key='product_one'
				id='product_one'
				image={productOne}
				title='Table de réunion'
				items={4}
			/>
			<ProductItem
				key='product_two'
				id='product_two'
				image={productTwo}
				title='Bureau Blanc'
				items={4}
			/>
			<ProductItem
				key='product_three'
				id='product_three'
				image={productThree}
				title='Bureau Bois'
				items={4}
			/>
			<ProductItem
				key='product_four'
				id='product_four'
				image={productFour}
				title='Bureau Bois'
				items={4}
			/>
			<ProductItem
				key='product_four'
				id='product_four'
				image={productFour}
				title='Bureau Bois'
				items={4}
			/>
			<ProductItem
				key='product_four'
				id='product_four'
				image={productFour}
				title='Bureau Bois'
				items={4}
			/>
		</PopularProductsWrapper>
	)
}
