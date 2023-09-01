import { styled } from 'styled-components'

export const FormButtonStyles = styled.button`
	padding: 10px;
	background: none;
	border-radius: 8px;
	width: 400px;
	color: var(--color-text);
	border: 2px solid var(--color-text);
	font-size: 16px;
	cursor: pointer;
	transition: 300ms;

	&:hover {
		transform: scale(1.02);
	}

	&:disabled {
		opacity: 0.5;
		cursor: default;
		&:hover {
			transform: scale(1);
		}
	}
`
