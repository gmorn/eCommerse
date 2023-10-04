import MenuItem from '@mui/material/MenuItem'
import { CustomTextField } from './MUIstyles'
import { Container } from './styles'

type Props = {}

const currencies = [
	{
		id: 0,
		value: 'сначала дорогие'
	},
	{
		id: 1,
		value: 'сначала дешевые'
	},
	{
		id: 2,
		value: 'по рейтингу'
	},
	{
		id: 3,
		value: 'по количеству отзывов'
	},
	{
		id: 4,
		value: 'сначала новые'
	},
	{
		id: 5,
		value: 'сначала старые'
	}
]

export default function SelectSortMethod({}: Props) {
	return (
		<Container>
			<CustomTextField
				id='outlined-select-currency'
				select
				label='выберите метод сортировки'
			>
				{currencies.map((option) => (
					<MenuItem key={option.id} value={option.id}>
						{option.value}
					</MenuItem>
				))}
			</CustomTextField>
		</Container>
	)
}
