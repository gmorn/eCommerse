import Organization from '@/components/screens/organization/Organization'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Props = {}

export default function OrgPageId({}: Props) {
	const [orgName, setOrgName] = useState<string>('')
	const router = useRouter()
	useEffect(() => {
		if (router.query.id !== undefined) {
			setOrgName(router.query.id as string)
		}
	}, [router])
	return (
		<div>
			<Organization orgName={orgName} />
		</div>
	)
}
