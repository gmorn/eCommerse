import styled, { css } from 'styled-components'

type T_Active = {
	active: boolean
}

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

export const CategoriesList = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 25px 5px 10px;
	max-width: 650px;
	transition: 300ms;
	overflow-x: scroll;
	scrollbar-width: none;
	scrollbar-color: transparent transparent;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		width: 0;
	}
`

export const CategoryItem = styled.div<T_Active>`
	padding: 7px;
	color: var(--color-text);
	border-radius: 10px;
	border: 1px solid var(--color-text);
	white-space: nowrap;
	cursor: pointer;
	transition: 300ms;

	&:hover {
		transform: scale(1.05);
	}

	${(props) =>
		props.active &&
		css`
			color: var(--color-accent);
			border: 1px solid var(--color-accent);
		`}
`
