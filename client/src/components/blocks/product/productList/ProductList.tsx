import React from 'react'
import styled, { css } from 'styled-components'
import ProductFilter from './productFilter/ProductFilter'

type Props = {
	children: React.ReactNode
	cartState: boolean
	toggleCartState: (param: boolean) => void
}

type T_State = {
	state: boolean
}

const ProductListContainer = styled.div``

const List = styled.div<T_State>`
	display: grid;
	gap: 24px;
	width: 968px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin: 20px auto;

	${(props) =>
		props.state &&
		css`
			grid-template-columns: 1fr 1fr;
		`}
`

export default function ProductList({
	children,
	cartState,
	toggleCartState,
}: Props) {
	return (
		<ProductListContainer>
			<ProductFilter
				toggleCartState={toggleCartState}
				cartState={cartState}
			/>
			<List state={cartState}>{children}</List>
		</ProductListContainer>
	)
}
