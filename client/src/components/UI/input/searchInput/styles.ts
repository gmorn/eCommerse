import styled, { css } from 'styled-components'

type T_FormProps = {
	active: boolean
	border: boolean
}

export const SearchForm = styled.label<T_FormProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 30px;
	cursor: pointer;
	padding: 0 4px;
	position: absolute;
	transition: width 300ms;

	${(props) =>
		props.border &&
		css`
			border: 1px solid var(--color-text);
			border-radius: 5px;
		`}

	input {
		border: none;
		width: 0;
		transition: 300ms;
		height: 32px;
		background: none;
		color: var(--color-text);
		font-size: 18px;

		&:focus {
			border: none;
			outline: none;
		}
	}

	${(props) =>
		props.active &&
		css`
			input {
				margin-left: 7px;
				border: none;
				width: 300px;
			}
		`}
`

export const ImageContainer = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const iconBaseStyles = {
	width: '24px',
	height: '24px',
	transition: '300ms transform',
	'&:hover': {
		transform: 'scale(1.05)'
	},
	'&:active': {
		transform: 'scale(0.9)'
	}
}

export const SearchIconStyles = {
	...iconBaseStyles,
	margin: '3px'
}

export const CloseIconStyles = {
	...iconBaseStyles
}
