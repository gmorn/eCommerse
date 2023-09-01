import { css, styled } from 'styled-components'

type T_translateParam = {
	count: number
	transition: boolean
}

export const MainContainer = styled.div`
	height: 150px;
	display: flex;
	align-items: center;
	gap: 10px;
`

export const Window = styled.div`
	height: 100%;
	width: 450px;
	overflow: hidden;
`

export const Pages = styled.div<T_translateParam>`
	height: 100%;
	display: flex;
	${(props) =>
		props.transition &&
		css`
			transition: 300ms;
		`}
	transform: translateX${(props) => `(${props.count}px)`};
`
