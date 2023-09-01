import { host } from '@/constants/host'
import axios, { AxiosResponse } from 'axios'

export default class OrgService {
	static async createOrg(orgName: string): Promise<AxiosResponse> {
		try {
			const response = await axios.post(
				`${host}/org/createOrg`,
				{ orgName },
				{
					withCredentials: true
				}
			)
			return response
		} catch (error: any) {
			return error.response
		}
	}

	static async getOrgByName(orgName: string): Promise<AxiosResponse> {
		try {
			const response = await axios.post(`${host}/org/getOrgByName`, { orgName })
			return response
		} catch (error: any) {
			return error.response
		}
	}
}
