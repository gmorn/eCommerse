import SearchInput from '@/components/UI/input/searchInput/SearchInput'
import HeaderNav from '@/components/blocks/header/headerNav/HeaderNav'
import Logo from '@/components/blocks/header/logo/Logo'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	padding: 10px;
	align-items: center;
	position: relative;
	z-index: 100;
`

type Props = {}

export default function Header({}: Props) {
	return (
		<HeaderContainer>
			<SearchInput />
			<Logo />
			<HeaderNav />
		</HeaderContainer>
	)
}
