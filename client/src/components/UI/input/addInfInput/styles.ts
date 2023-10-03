import { css, styled } from 'styled-components'

type T_InputProps = {
	status: boolean
}

export const InfInput = styled.input<T_InputProps>`
	min-width: 200px;
	max-width: 700px;
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: 3px dashed var(--color-text);
	font-size: 20px;
	opacity: 0.5;
	background: var(--color-main);
	color: var(--color-text);

	&::placeholder {
		text-align: center;
		color: var(--color-text);
	}
	&[type='number'] {
		text-align: right;
	}

	&:focus {
		outline: none;
		opacity: 1;
		border: 3px solid var(--color-text);
		font-size: 20px;
		padding: 10px;
		text-align: left;
	}

	${(props) =>
		props.status &&
		css`
			border: none;
			font-size: 40px;
			opacity: 1;
			padding: 0;

			&[type='number'] {
				width: 200px;
			}
		`}

	&::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`
