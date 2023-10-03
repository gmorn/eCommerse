import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { styled } from 'styled-components'

type Props = { onClick?: () => void }

const Button = styled.button`
	width: 30px;
  height: 30px;
  background: var(--color-main);
	border: 2px solid var(--color-text);
	border-radius: 50%;
	transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`

export default function DeleteButton({ onClick }: Props) {
	return (
		<Button onClick={onClick}>
			<DeleteForeverIcon sx={{color: 'var(--color-text)'}} />
		</Button>
	)
}
