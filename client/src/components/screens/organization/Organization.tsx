import MainButton from '@/components/UI/button/mainButton/MainButton'
import OrgTitle from '@/components/blocks/orgPage/Title/OrgTitle'
import OrgSwitcher from '@/components/blocks/orgPage/orgSwitcher/OrgSwitcher'
import AddProductButton from '@/components/blocks/product/addProductButton/AddProductButton'
import OrgService from '@/services/orgService'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { T_Org } from './org.types'
import { OrgHeader, OrgPageContainer } from './style'

type Props = {
	orgName: string
}

export default function Organization({ orgName }: Props) {
	const [org, setOrg] = useState<T_Org | null>(null)
	const [pageState, setPageState] = useState(true)

	// получение данных организации

	useEffect(() => {
		const fetchOrg = async () => {
			const response = await OrgService.getOrgByName(orgName)
			setOrg(response.data)
		}
		fetchOrg()
	}, [orgName])

	return (
		<>
			{org ? (
				<OrgPageContainer>
					<OrgHeader>
						<OrgTitle org={org} />
						<MainButton>Управление персоналом</MainButton>
					</OrgHeader>
					<OrgSwitcher pageState={pageState} setPageState={setPageState} />
					{pageState ? (
						<>
							<Link href='/createProduct'>
								<AddProductButton />
							</Link>
						</>
					) : (
						'2'
					)}
				</OrgPageContainer>
			) : null}
		</>
	)
}
