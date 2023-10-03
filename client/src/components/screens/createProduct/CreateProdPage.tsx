import MainButton from '@/components/UI/button/mainButton/MainButton'
import AddGalleryBlock from '@/components/blocks/product/createProductBlocks/addGalleryLBock/AddGalleryBlock'
import AddInfBlock from '@/components/blocks/product/createProductBlocks/addInfBlock/AddInfBlock'
import ProductService from '@/services/productService'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { T_NewProduct } from './type'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/store'

type Props = {}

const Container = styled.div`
	display: flex;
	align-items: center;
`
const Wrapper = styled.div`
	button {
		float: right;
	}
`

export default function CreateProdPage({}: Props) {
	const router = useRouter()

	const orgName = useAppSelector(state => state.user.userOrg)

	const [product, setProduct] = useState<T_NewProduct>({
		name: '',
		price: '',
		category: '',
		description: '',
		gallery: []
	})

	const [isValid, setValid] = useState(true)

	useEffect(() => {
		console.log(product)
		if (
			product.name !== '' &&
			product.price !== '' &&
			product.category !== '' &&
			product.description !== '' &&
			product.gallery.length !== 0
		) {
			setValid(false)
		}
	}, [product])

	const createNewProduct = async () => {
		const response = await ProductService.createNewProduct(product)

		if (response) {
			if (response.status === 400) {
				// потом допишу вызов уведомления об ошибке
			} else if (response.status === 200) {
				router.push(`/organization/${orgName}`)
			}
		}
	}

	return (
		<Wrapper>
			<Container>
				<AddGalleryBlock product={product} setProduct={setProduct} />
				<AddInfBlock product={product} setProduct={setProduct} />
			</Container>
			<MainButton disabled={isValid} onClick={createNewProduct}>
				Сохранить
			</MainButton>
		</Wrapper>
	)
}
