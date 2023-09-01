import React from 'react'
import { css, styled } from 'styled-components'

type Props = {
	children: React.ReactNode
	active: boolean
}

type T_Active = {
	active: boolean
}

const Container = styled.div<T_Active>`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-width: 100px;
	transition: 300ms;
	padding: 0 10px;

	${(props) =>
		props.active
			? css`
					padding: 10px;
					height: 100%;
					border-radius: 10px;
					border: solid 1px var(--color-accent);
					background: var(--color-main);
			  `
			: css`
					max-height: 0px;
			  `}
`

export default function DropdownMenu({ children, active }: Props) {
	return <Container active={active}>{children}</Container>
}
