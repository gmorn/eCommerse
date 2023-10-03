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
	data: string
	description: string
	gallery: string[]
	id: number
	name: string
	organization_id: number
	price: number
	rating: number
}

export default function HomePage({}: Props) {
	const [cartState, setCartState] = useState(false)

	

	const dispatch = useAppDispatch()
	const products = useAppSelector((state) => state.products.products)

	const getPageCount = (): number => {
		if (products.length === 0) {
			return 1
		} else {
			return products.length / 2
		}
	}

	const [pageCount, setPageCount] = useState<number>(getPageCount())

	useEffect(() => {
		console.log(pageCount)
	}, [pageCount])

	const { data, isLoading, isError }: UseQueryResult<AxiosResponse> = useQuery(
		['products', pageCount],
		() => ProductService.getProducts(pageCount),
		{
			enabled: pageCount !== products.length / 2 || products.length / 2 === 1,
			refetchOnWindowFocus: false
		}
	)

	useEffect(() => {
		if (
			data?.status === 200 &&
			data?.data &&
			pageCount !== products.length / 2
		) {
			dispatch(addProducts([...products, ...data.data]))
		}
	}, [data])

	const switchCartState = (value: boolean) => {
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
