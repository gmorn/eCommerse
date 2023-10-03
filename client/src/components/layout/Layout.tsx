import { useAppDispatch, useAppSelector } from '@/hooks/store'
import UserService from '@/services/userService'
import { setTheme } from '@/store/theme/themeSlice'
import { setIsLogin, setUserOrg, setUserRole } from '@/store/user/userSlice'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'

type Props = {
	children: React.ReactNode
}

const Container = styled.div`
	width: 1200px;
	margin: 0 auto 50px;
`

export default function Layout({ children }: Props) {
	const router = useRouter()
	const isAuthPage = router.pathname === '/auth'

	const theme = useAppSelector((state) => state.theme.theme)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme')
		if (currentTheme) {
			dispatch(setTheme(currentTheme))
		}

		const fetchIsUser = async () => {
			try {
				const { data } = await UserService.isUser()

				if (typeof data === 'boolean') {
					dispatch(setIsLogin(data))
					if (data === true) {
						const role = await UserService.getUserRole()
						if (typeof role === 'number') {
							dispatch(setUserRole(role))
							if (role === 2 || 3 || 4) {
								const org = await UserService.getUserOrg()
								if (typeof org === 'string') dispatch(setUserOrg(org))
							}
						}
					}
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchIsUser()
	}, [])

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<Container>
			{!isAuthPage && <Header />}
			{children}
		</Container>
	)
}
