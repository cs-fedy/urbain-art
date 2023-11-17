import Slider from "../common/slider"
import ProductItem from "./product/product_item"
import { Products as TProducts } from "./product/types"

type ProductsProps = { products: TProducts }

export default function Products({ products }: ProductsProps) {
	return (
		<div className='w-full'>
			<div className='hidden w-full grid-cols-4 justify-between gap-4 lg:grid'>
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>

			<div className='lg:hidden'>
				<Slider itemsPerWindow={1}>
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</Slider>
			</div>
		</div>
	)
}
