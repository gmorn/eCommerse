import { css, styled } from 'styled-components'

type T_translateParam = {
	count: number
	transition: boolean
}

export const MainContainer = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`

export const Window = styled.div`
	height: 320px;
	width: 100%;
	overflow: hidden;
`

export const Pages = styled.div<T_translateParam>`
	padding: 10px 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	${(props) =>
		props.transition &&
		css`
			transition: 300ms;
		`}
	transform: translateY${(props) => `(${props.count}px)`};
`
