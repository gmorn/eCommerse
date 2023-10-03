import AddIcon from '@mui/icons-material/Add'
import { styled } from 'styled-components'

type Props = {}

const ButtonContainer = styled.div`
	width: 224px;
	height: 364px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3px dashed var(--color-text);
	border-radius: 12px;
	transition: 300ms;
	opacity: 0.5;
	color: var(--color-text);
	&:hover {
		transform: scale(1.02);
	}
`

const iconStyles = {
	cursor: 'pointer',
	width: '150px',
	height: '150px'
}

const Title = styled.div`
	text-align: center;
	font-size: 30px;
`

export default function AddProductButton({}: Props) {
	return (
		<ButtonContainer>
			<AddIcon sx={iconStyles} />
			<Title>Добавить товар</Title>
		</ButtonContainer>
	)
}
