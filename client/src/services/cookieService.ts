import { host } from '@/constants/host'
import axios from 'axios'

export default class CookieService {
	static async deleteJwt() {
		try {
			await axios.get(`${host}/cookie/deleteJwt`, {
				withCredentials: true
			})
		} catch (error: any) {}
	}
}
