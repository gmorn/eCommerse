import { host } from '@/constants/host'
import axios, { AxiosResponse } from 'axios'

export default class CategoryService {
  static async getCategory(): Promise<AxiosResponse> {
    try {
			const response = await axios.get(`${host}/category/getCategories`)
			return response
		} catch (error: any) {
			return error.response
		}
  }
}