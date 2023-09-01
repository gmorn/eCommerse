import ButtonBlock from '@/components/blocks/auth/buttonBlock/ButtonBlock'
import FormBlock from '@/components/blocks/auth/formBlock/FormBlock'
import { useAppDispatch } from '@/hooks/store'
import UserService from '@/services/userService'
import { setIsLogin, setUserRole } from '@/store/user/userSlice'
import { setCookie } from '@/utils/cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { T_FormField, T_User } from './auth.types'
import { FormContainer, FormWrapper, Title } from './styles'

type Props = {}

export default function AuthPage({}: Props) {
	const router = useRouter()

	const dispatch = useAppDispatch()

	const [pageType, setPageType] = useState('login')

	const [user, setUser] = useState<T_User>({
		firstName: { value: '', isValid: null },
		lastName: { value: '', isValid: null },
		password: { value: '', isValid: null },
		passwordRepeat: { value: '', isValid: null },
		phone: { value: '', isValid: null }
	})

	const changeUser = (
		firstName: T_FormField,
		lastName: T_FormField,
		password: T_FormField,
		passwordRepeat: T_FormField,
		phone: T_FormField
	) => {
		setUser({
			...user, // Spread the existing user state to maintain other properties
			firstName,
			lastName,
			password,
			passwordRepeat,
			phone
		})
	}

	const [availableNumberStatus, setAvailableNumberStatus] = useState(true)
	const [correctPasswordStatus, setCorrectPasswordStatus] = useState(true)

	const fetchAuth = async () => {
		let response
		if (pageType === 'login') {
			response = await UserService.loginUser({
				password: user.password.value,
				phone: user.phone.value
			})
		} else {
			response = await UserService.regUser({
				firstName: user.firstName.value,
				lastName: user.lastName.value,
				password: user.password.value,
				phone: user.phone.value
			})
		}

		if (response) {
			if (response.status === 400) {
				setAvailableNumberStatus(false)
			} else if (response.status === 404) {
				setCorrectPasswordStatus(false)
			} else if (response.status === 200) {
				setCookie('jwt', response.data)
				dispatch(setIsLogin(true))
				const role = await UserService.getUserRole()
				if (typeof role === 'number') {
					dispatch(setUserRole(role))
					if (role === 2 || 3 || 4) {
						
					}
				}
				router.push('/home')
			}
		} else {
			console.error('Error fetching authentication data')
		}
	}

	return (
		<FormWrapper>
			<FormContainer>
				<Title>{pageType === 'login' ? 'Вход' : 'Регистрация'}</Title>
				<FormBlock
					pageType={pageType}
					changeUser={changeUser}
					correctPasswordStatus={correctPasswordStatus}
					setCorrectPasswordStatus={setCorrectPasswordStatus}
					availableNumberStatus={availableNumberStatus}
					setAvailableNumberStatus={setAvailableNumberStatus}
				/>
				<ButtonBlock
					pageType={pageType}
					user={user}
					setPageType={setPageType}
					fetchAuth={fetchAuth}
				/>
			</FormContainer>
		</FormWrapper>
	)
}
