import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addProducts, setActiveSortMethod } from '@/store/product/productsSlice'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
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
	const [selectedValue, setSelectedValue] = useState<number | string>('') // Initialize with an empty string or an appropriate default value

	const activeSortMethod = useAppSelector(
		(state) => state.products.activeSortMethod
	)
	const dispatch = useAppDispatch()

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSelectedValue(event.target.value as number | string) // Update the selectedValue state with the new value
	}

  const setNewActiveSortMethod = (id: number) => {
    dispatch(setActiveSortMethod(id))
    dispatch(addProducts([]))
  }

	return (
		<Container>
			<CustomTextField
				id='outlined-select-currency'
				select
				label='выберите метод сортировки'
				value={activeSortMethod}
				onChange={handleChange}
				size='small'
				sx={{borderWidth: '3px'}}
			>
				{currencies.map((option) => (
					<MenuItem
						key={option.id}
						value={option.id}
						onClick={() => setNewActiveSortMethod(option.id)}
					>
						{option.value}
					</MenuItem>
				))}
			</CustomTextField>
		</Container>
	)
}
