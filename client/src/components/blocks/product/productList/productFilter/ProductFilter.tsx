import CategoryList from './categoryList/CategoryList'
import ProductCartSwitcher from './productCartSwitcher/ProductCartSwitcher'
import SelectSortMethod from './selectSortMethod/SelectSortMethod'
import { Container } from './styles'

type Props = {
	cartState: boolean
	toggleCartState: (param: boolean) => void
}

export default function ProductFilter({ cartState, toggleCartState }: Props) {
	return (
		<Container>
			<SelectSortMethod />
			<CategoryList />
			<ProductCartSwitcher
				cartState={cartState}
				toggleCartState={toggleCartState}
			/>
		</Container>
	)
}
