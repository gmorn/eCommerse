import styled, { css } from 'styled-components'

type T_InputStatus = {
	status: boolean | null
}

export const Input = styled.input<T_InputStatus>`
	border-radius: 8px;
	padding: 10px;
	background: none;
	border: 2px solid var(--color-text);
	width: 380px;
	font-size: 16px;
	transition: 300ms;

	&::placeholder {
		font-size: 16px;
		color: var(--color-text);
		opacity: 0.5;
		${(props) =>
			props.status !== null &&
			!props.status &&
			css`
				color: var(--color-red);
			`}
	}

	&:focus {
		border-color: var(--color-accent);
		color: var(--color-accent);
		outline: none;
		transform: scale(1.02);
		${(props) =>
			props.status !== null &&
			!props.status &&
			css`
				border: 1px solid var(--color-red);
				color: var(--color-red);
			`}
	}

	${(props) =>
		props.status !== null &&
		!props.status &&
		css`
			border: 1px solid var(--color-red);
			color: var(--color-red);
		`}
`

export const Label = styled.label<T_InputStatus>`
	display: none;

	${(props) =>
		props.status !== null &&
		props.status &&
		css`
			text-align: center;
			color: var(--color-red);
			font-size: 16px;
			display: block;
		`}
`
