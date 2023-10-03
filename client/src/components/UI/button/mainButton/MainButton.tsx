import { styled } from 'styled-components'

type Props = {
	children: string
	onClick?: () => void
	disabled?: boolean
}

const Button = styled.button`
	background: var(--color-main);
	cursor: pointer;
	transition: 300ms;
	padding: 10px 20px;
	border: 2px solid var(--color-text);
	color: var(--color-text);
  border-radius: 10px;

	&:hover {
		transform: scale(1.05);
		border: 2px solid var(--color-accent);
		color: var(--color-accent);
	}

	&:disabled {
    opacity: 0.5;
		cursor: default;
		&:hover {
			border: 2px solid var(--color-text);
			color: var(--color-text);
			transform: scale(1);
		}
	}
`

export default function MainButton({
	children,
	onClick,
	disabled = false
}: Props) {
	return (
		<Button disabled={disabled} onClick={onClick}>
			{children}
		</Button>
	)
}
