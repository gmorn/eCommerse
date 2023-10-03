import { css, styled } from 'styled-components'

type T_Active = {
	active: boolean
	status: boolean
}

export const InputContainer = styled.div`
	width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
	position: relative;
	
`

export const Input = styled.input<T_Active>`
	width: 426px;
	padding: 10px;
	border: 3px dashed var(--color-text);
	opacity: 0.5;
	border-radius: 12px;
	font-size: 20px;
	background: var(--color-main);
	color: var(--color-text);

	&::placeholder {
		color: var(--color-text);
	}

	&:focus {
		outline: none;
		border-radius: 12px 12px 0 0;
		opacity: 1;
		border: 3px solid var(--color-text);
		font-size: 20px;
		border-bottom: none;
		padding: 10px;

		${(props) =>
			props.status &&
			css`
				border: 3px solid var(--color-text);
				border-radius: 12px;
			`}
	}

	${(props) =>
		props.active &&
		css`
			border: none;
			font-size: 25px;
			opacity: 1;
			padding: 0;
			width: 100%;
		`}
`

export const HintsBLock = styled.div<T_Active>`
	display: none;
  top: 47px;
	position: absolute;
	border: none;
	padding: 0;
  width: 426px;

	${(props) =>
		props.active &&
		css`
			z-index: 1;
			max-height: 110px;
			padding: 10px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			overflow-y: hidden;
			background: var(--color-main);
			border: 3px solid var(--color-text);
			border-top: none;
			border-radius: 0 0 12px 12px;
		`}

	${(props) =>
		props.status &&
		css`
			display: none;
		`}
`

export const HintItem = styled.div`
	cursor: pointer;
	color: var(--color-text);
`

export const CategoryTitle = styled.div`
	font-size: 25px;
`
