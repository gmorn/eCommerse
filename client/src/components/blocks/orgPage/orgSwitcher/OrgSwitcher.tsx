import { OrgSwitcherContainer, SwitcherButton } from './styled'

type Props = {
	pageState: boolean
	setPageState: (param: boolean) => void
}

export default function OrgSwitcher({ pageState, setPageState }: Props) {
	return (
		<OrgSwitcherContainer>
			<SwitcherButton active={pageState} onClick={() => setPageState(true)}>Товары</SwitcherButton>
			<SwitcherButton active={!pageState}onClick={() => setPageState(false)}>Заказы</SwitcherButton>
		</OrgSwitcherContainer>
	)
}
