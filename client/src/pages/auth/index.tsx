import AuthPage from '@/components/screens/auth/AuthPage'
import { useAppSelector } from '@/hooks/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {}

export default function ({}: Props) {
	const router = useRouter()
	const isLogin = useAppSelector((state) => state.user.isLogin)

	useEffect(() => {
		if (isLogin) {
			router.push('/home')
		}
	}, [isLogin])

	return <AuthPage />
}
