import { css, styled } from 'styled-components'

type T_Active = {
	active: boolean
}

export const DescTextarea = styled.textarea<T_Active>`
	padding: 10px;
	height: 300px;
	resize: none;
	border-radius: 12px;
	border: 3px dashed var(--color-text);
	opacity: 0.5;
	font-size: 18px;
  overflow: hidden;
	background: var(--color-main);
	color: var(--color-text);

	&::placeholder {
		color: var(--color-text);
		align-items: center;
	}

  ${(props) =>
    props.active &&
    css`
      padding: 0;
      border: none;
      opacity: 1;
      border-radius: 0;
    `}

	&:focus {
		border-radius: 12px;
		outline: none;
		border: 3px solid var(--color-text);
		opacity: 1;
    padding: 10px;
    font-size: 16px;
	}
`
