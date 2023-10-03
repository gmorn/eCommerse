import '@fontsource/quicksand'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {}

const LogoContainer = styled.h1`
		margin: 0 auto;
	a {
		font-size: 36px;
		color: var(--color-text);
		font-family: Quicksand;
		font-weight: 400;
		cursor: pointer;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
`

export default function Logo({}: Props) {
	return (
		<LogoContainer>
			<Link href='/home'>shop</Link>
		</LogoContainer>
	)
}
