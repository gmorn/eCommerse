import SecondCartStateIcon from './SecondCartStateIcon'
import FirstCartStateIcon from './FirstCartStateIcon'
import { SwitcherContainer } from './styles'


type Props = {  
	cartState: boolean
	toggleCartState: (param: boolean) => void
}

export default function ProductCartSwitcher({
	cartState,
	toggleCartState
}: Props) {
	return (
		<SwitcherContainer>
			<FirstCartStateIcon
				active={!cartState}
				onClick={() => toggleCartState(false)}
			/>
			<SecondCartStateIcon
				active={cartState}
				onClick={() => toggleCartState(true)}
			/>
		</SwitcherContainer>
	)
}
