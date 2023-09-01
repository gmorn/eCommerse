import { css, styled } from 'styled-components'

type param = {
	number?: number
}


export const BlockOne = styled.div<param>`
	height: 150px;
	min-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
	/* border-radius: 10px; */
	${(props) =>
		props.number === 1
			? css`
					background: green;
			  `
			: props.number === 2
			? css`
					background: red;
			  `
			: props.number === 3
			? css`
					background: orange;
			  `
			: props.number === 4
			? css`
					background: blue;
			  `
			: props.number === 5
			? css`
					background: rebeccapurple;
			  `
			: ''}
`

export const BlockTwo = styled.div<param>`
	min-height: 100px;
	min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
	border-radius: 10px;
	${(props) =>
		props.number === 1
			? css`
					background: green;
			  `
			: props.number === 2
			? css`
					background: red;
			  `
			: props.number === 3
			? css`
					background: orange;
			  `
			: props.number === 4
			? css`
					background: blue;
			  `
			: props.number === 5
			? css`
					background: rebeccapurple;
			  `
			: ''}
`