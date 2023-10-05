import { T_NewProduct } from '@/components/screens/createProduct/type'
import { host } from '@/constants/host'
import axios, { AxiosResponse } from 'axios'

export default class ProductService {
	static async createNewProduct(
		newProduct: T_NewProduct
	): Promise<AxiosResponse> {
		try {
			const formData = new FormData()

			formData.append('name', newProduct.name)
			formData.append('price', newProduct.price)
			formData.append('category', newProduct.category)
			formData.append('description', newProduct.description)

			newProduct.gallery.forEach((file, index) => {
				formData.append(`image_${index}`, file)
			})

			const response = await axios.post(
				`${host}/product/createProduct`,
				formData,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			return response
		} catch (error: any) {
			return error.response
		}
	}
	static async getProducts(pageCount: number, category?: number | undefined, sortMethod?: number | undefined): Promise<AxiosResponse> {
		try {
			const response = await axios.post(
				`${host}/product/getProducts/${pageCount}`,
				{
					category: category,
					sortMethod: sortMethod
				}
			)
			return response
		} catch (error: any) {
			return error.response
		}
	}
}
