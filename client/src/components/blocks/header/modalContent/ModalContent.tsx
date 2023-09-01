import MainButton from '@/components/UI/button/mainButton/MainButton'
import FormInput from '@/components/UI/input/formInput/FormInput'
import { useAppDispatch } from '@/hooks/store'
import OrgService from '@/services/orgService'
import { setUserOrg, setUserRole } from '@/store/user/userSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

type Props = { setOpen: (param: boolean) => void }

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 20px;
	border-radius: 10px;
	background: var(--color-main);
	color: var(--color-text);
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

export default function ModalContent({ setOpen }: Props) {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [orgName, setOrgName] = useState('')
	const [nameState, setNameState] = useState(true)

	const createOrg = async (name: string) => {
		const response = await OrgService.createOrg(name)
    console.log(response);
    
		if (response.status === 200) {
      setOpen(false)
			dispatch(setUserRole(response.data.userRole))
			dispatch(setUserOrg(response.data.orgName))
			router.push(`/organization/${response.data.orgName}`)
      console.log(response);
		} else  {
			setNameState(false)
		}
	}

	useEffect(() => {
		setNameState(true)
	}, [orgName])

	return (
		<Container>
			<h2>Создание организации</h2>
			<FormInput
				status={nameState}
				placeholder={'Введите название организации'}
				label={'Название уже занято'}
				value={orgName}
				onChange={setOrgName}
			/>
			<MainButton onClick={() => createOrg(orgName)} disabled={orgName === ''}>
				Создать
			</MainButton>
		</Container>
	)
}
