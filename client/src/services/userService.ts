import { T_UserLogin, T_UserReg } from '@/components/screens/auth/auth.types'
import { host } from '@/constants/host'
import axios, { AxiosResponse } from 'axios'

export default class UserService {
	static async regUser(user: T_UserReg): Promise<AxiosResponse> {
		try {
			const response = await axios.post(`${host}/user/registration`, user)
			return response
		} catch (error: any) {
			return error.response
		}
	}

	static async loginUser(user: T_UserLogin): Promise<AxiosResponse> {
		try {
			const response = await axios.post(`${host}/user/login`, user)
			return response
		} catch (error: any) {
			return error.response
		}
	}

	static async isUser(): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`${host}/user/isUser`, {
				withCredentials: true
			})
			return response
		} catch (error: any) {
			return error.response
		}
	}

	static async getUserLogo(): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`${host}/user/getUserlogo`, {
				withCredentials: true
			})
			return response.data
		} catch (error: any) {
			return error.response.data
		}
	}

	static async getUserRole(): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`${host}/user/getRole`, {
				withCredentials: true
			})
			return response.data
		} catch (error: any) {
			return error.response.data
		}
	}

	static async getUserOrg(): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`${host}/user/getUserOrg`, {
				withCredentials: true
			})
			return response.data
		} catch (error: any) {
			return error.response.data
		}
	}
}
