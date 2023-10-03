import CategoryList from './categoryList/CategoryList'
import ProductCartSwitcher from './productCartSwitcher/ProductCartSwitcher'
import { Container } from './styles'

type Props = {
	cartState: boolean
	toggleCartState: (param: boolean) => void
}

export default function ProductFilter({ cartState, toggleCartState }: Props) {
	return (
		<Container>
			<CategoryList />
			<ProductCartSwitcher
				cartState={cartState}
				toggleCartState={toggleCartState}
			/>
		</Container>
	)
}
