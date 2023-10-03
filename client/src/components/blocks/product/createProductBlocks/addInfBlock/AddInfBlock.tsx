import AddInfInput from '@/components/UI/input/addInfInput/AddInfInput'
import InputWithHints from '@/components/UI/input/inputWithMenu/InputWithHints'
import { T_NewProduct } from '@/components/screens/createProduct/type'
import { useState } from 'react'
import {
	AddInfBlockContainer,
	CategoryBlock,
	NameBlock,
	PriceInputBLock
} from './styles'
import DescriptionInput from '@/components/UI/input/descriptionInput/DescriptionInput'

type Props = {
	product: T_NewProduct
	setProduct: (param: T_NewProduct) => void
}

export default function AddInfBlock({ product, setProduct }: Props) {
	const [testCategory, setTestCotegory] = useState<string[]>([
		'Еда',
		'Автомобили',
		'Компьютерная техника',
		'Одежда',
		'Мебель',
		'Бытовая техника',
		'Растения',
		'Концелярия'
	])

	const [isInputFocused, setInputFocused] = useState(false)

	const setNewProductName = (value: string) => {
		setProduct({ ...product, name: value })
	}

	const setNewPrice = (value: string) => {
		setProduct({ ...product, price: value })
	}

	const setNewCategory = (value: string) => {
		setProduct({ ...product, category: value })
	}

	const setNewDescription = (value: string) => {
		setProduct({ ...product, description: value })
	}

	return (
		<AddInfBlockContainer>
			<NameBlock>
				<AddInfInput
					placeholder='Название'
					value={product.name}
					onChange={setNewProductName}
				/>
			</NameBlock>
			<CategoryBlock>
				<InputWithHints
					hints={testCategory}
					placeholder='Выберите катеорию'
					value={product.category}
					onChange={setNewCategory}
				/>
				<PriceInputBLock>
					<AddInfInput
						placeholder='Цена'
						type={'number'}
						value={product.price}
						onChange={setNewPrice}
						onFocus={() => setInputFocused(true)}
						onBlur={() => setInputFocused(false)}
					/>
					{product.price !== '' && !isInputFocused ? <p>₽</p> : null}
				</PriceInputBLock>
			</CategoryBlock>
			<DescriptionInput value={product.description} onChange={setNewDescription} />
		</AddInfBlockContainer>
	)
}
