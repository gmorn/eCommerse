import FormButton from '@/components/UI/button/formButton/FormButton'
import { T_User } from '@/components/screens/auth/auth.types'
import { ButtonContainer, Text } from './styles'

type Props = {
	pageType: string
	user: T_User
	setPageType: (newPageType: string) => void
	fetchAuth: () => void
}

export default function ButtonBlock({
	pageType,
	user,
	setPageType,
	fetchAuth
}: Props) {
	return (
		<ButtonContainer>
			{pageType === 'registration' ? (
				<>
					<FormButton
						onClick={fetchAuth}
						disabled={
							!(
								user.firstName.isValid &&
								user.lastName.isValid &&
								user.password.isValid &&
								user.passwordRepeat.isValid &&
								user.phone.value
							)
						}
					>
						Зарегистрироваться
					</FormButton>
					<Text>Уже есть аккаунт?</Text>
					<FormButton onClick={() => setPageType('login')}>Войти</FormButton>
				</>
			) : pageType === 'login' ? (
				<>
					<FormButton
						disabled={!(user.phone.isValid && user.password.isValid)}
						onClick={fetchAuth}
					>
						Войти
					</FormButton>
					<Text>Ещё нет аккаунта?</Text>
					<FormButton onClick={() => setPageType('registration')}>
						Зарегистрироваться
					</FormButton>
				</>
			) : null}
		</ButtonContainer>
	)
}
