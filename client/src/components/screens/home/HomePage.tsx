import MainButton from '@/components/UI/button/mainButton/MainButton'
import ProductCart from '@/components/blocks/product/productCart/ProductCart'
import ProductList from '@/components/blocks/product/productList/ProductList'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import ProductService from '@/services/productService'
import { addProducts } from '@/store/product/productsSlice'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query'

type Props = {}

export type T_Product = {
	category_id: number
	comment_count: number
	date: string
	description: string
	gallery: string[]
	id: number
	name: string
	organization_id: number
	price: number
	rating: number
}

const pageLength = 4

export default function HomePage({}: Props) {
	const [cartState, setCartState] = useState(false)

	useEffect(() => {
		const data = localStorage.getItem('cartState')
		if (data !== null) {
			if (data === 'true') {
				setCartState(true)
			} else {
				setCartState(false)
			}
		}
	}, [])

	const dispatch = useAppDispatch()
	const { products, activeCategory, activeSortMethod } = useAppSelector(
		(state) => state.products
	)

	const [category, setCategory] = useState<number | undefined>(activeCategory)
	const [sortMethod, setSortMethod] = useState<number | undefined>(
		activeSortMethod
	)

	const getPageCount = (): number => {
		if (products.length === 0) {
			return 1
		} else {
			return Math.ceil(products.length / pageLength)
		}
	}

	const [pageCount, setPageCount] = useState<number>(getPageCount())

	useEffect(() => {
		console.log(pageCount)
	}, [pageCount])

	const { data, isLoading, isError }: UseQueryResult<AxiosResponse> = useQuery(
		['products', pageCount, activeCategory, activeSortMethod],
		() =>
			ProductService.getProducts(Math.ceil(products.length / pageLength) + 1, activeCategory, activeSortMethod),
		{
			enabled:
				pageCount !== Math.ceil(products.length / pageLength) ||
				products.length / pageLength === 1 ||
				category !== activeCategory ||
				sortMethod !== activeSortMethod,
			refetchOnWindowFocus: false
		}
	)

	useEffect(() => {
		setPageCount(getPageCount())
	}, [
		activeCategory, activeSortMethod
	])

	useEffect(() => {
		if (
			(category !== activeCategory || sortMethod !== activeSortMethod) &&
			data?.status === 200
		) {
			dispatch(addProducts(data.data))
			setCategory(activeCategory)
			setSortMethod(activeSortMethod)
		} else {
			if (
				data?.status === 200 &&
				data?.data &&
				pageCount !== Math.ceil(products.length / pageLength)
			) {
				dispatch(addProducts([...products, ...data.data]))
			}
		}
	}, [data])

	const switchCartState = (value: boolean) => {
		localStorage.setItem('cartState', JSON.stringify(value))
		setCartState(value)
	}

	return (
		<>
			<ProductList toggleCartState={switchCartState} cartState={cartState}>
				{products.map((product) => (
					<ProductCart
						key={product.id}
						cartState={cartState}
						product={product}
					/>
				))}
			</ProductList>
			<MainButton onClick={() => setPageCount(pageCount + 1)}>
				Получить ещё
			</MainButton>
		</>
	)
}
