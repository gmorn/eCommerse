import CategoryService from '@/services/categoryService'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useEffect, useRef, useState } from 'react'
import { CategoriesList, CategoryItem, Container } from './styles'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addProducts, setActiveCategory } from '@/store/product/productsSlice'

type Props = {}

type T_Category = {
	id: number
	name: string
}

export default function CategoryList({}: Props) {
	const [categories, setCategories] = useState<T_Category[]>([])
	const categoriesListRef = useRef<HTMLDivElement>(null)

	const activeCategory = useAppSelector(state => state.products.activeCategory)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const getCategories = async () => {
			const response = await CategoryService.getCategory()
			setCategories(response.data)
		}
		getCategories()
	}, [])

	const scrollRight = () => {
		if (categoriesListRef.current) {
			categoriesListRef.current.scrollLeft -= 200
		}
	}

	const scrollLeft = () => {
		if (categoriesListRef.current) {
			categoriesListRef.current.scrollLeft += 200
		}
	}

	const switchCategory = (id: number) => {
		if (id === activeCategory) {
			dispatch(setActiveCategory(undefined))
			dispatch(addProducts([]))
		} else {
			dispatch(setActiveCategory(id))
			dispatch(addProducts([]))
		}
	}

	return (
		<Container>
			<ArrowBackIosIcon
				sx={{ color: 'var(--color-text)', cursor: 'pointer' }}
				onClick={scrollRight}
			/>
			<CategoriesList ref={categoriesListRef}>
				{categories.map((category) => (
					<CategoryItem
						onClick={() => switchCategory(category.id)}
						active={activeCategory === category.id}
					>
						{category.name}
					</CategoryItem>
				))}
			</CategoriesList>
			<ArrowForwardIosIcon
				sx={{ color: 'var(--color-text)', cursor: 'pointer' }}
				onClick={scrollLeft}
			/>
		</Container>
	)
}
