import DropdownMenu from '@/components/UI/dropdown/DropdownMenu'
import { host } from '@/constants/host'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import UserService from '@/services/userService'
import { setTheme } from '@/store/theme/themeSlice'
import { setIsLogin, setUserOrg, setUserRole } from '@/store/user/userSlice'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LightModeIcon from '@mui/icons-material/LightMode'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import Modal from '@mui/material/Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import ModalContent from '../modalContent/ModalContent'
import {
	HeaderNavContainer,
	HeaderNavMenu,
	ImageContainer,
	MenuContent,
	OutButton
} from './styled'
import CookieService from '@/services/cookieService'

type Props = {}

const NavItem = {
	cursor: 'pointer',
	transition: '300ms',

	'&:hover': {
		transform: 'scale(1.1)'
	}
}

export default function HeaderNav({}: Props) {
	type RefObject<T> = MutableRefObject<T | null>

	const router = useRouter()
	const theme = useAppSelector((state) => state.theme.theme)
	const dispatch = useAppDispatch()
	const { isLogin, userOrg, userRole } = useAppSelector((state) => state.user)

	const [userLogoPath, setUserLogoPath] = useState('')

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'

		localStorage.setItem('theme', newTheme)
		dispatch(setTheme(newTheme))
	}

	useEffect(() => {
		const fetchUserLogo = async () => {
			const data = await UserService.getUserLogo()
			setUserLogoPath(`${host + data}`)
		}
		if (isLogin) {
			fetchUserLogo()
		}
	}, [isLogin])

	const [menuState, setMenuState] = useState(false)

	useEffect(() => {
		setMenuState(false)
	}, [router.asPath])

	const headerMenuRef: RefObject<HTMLInputElement> = useRef(null)

	useEffect(() => {
		if (!headerMenuRef) return
		const hendelClick = (e: MouseEvent) => {
			if (
				headerMenuRef.current &&
				!headerMenuRef.current.contains(e.target as Node)
			) {
				setMenuState(false)
			}
		}
		document.addEventListener('mousedown', hendelClick)
		return () => {
			document.removeEventListener('mousedown', hendelClick)
		}
	})

	const logOutFunc = async () => {
		await CookieService.deleteJwt()
		dispatch(setIsLogin(false))
		dispatch(setUserOrg(null))
		dispatch(setUserRole(null))
	}

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<HeaderNavContainer>
			{theme === 'light' ? (
				<LightModeIcon sx={NavItem} onClick={toggleTheme} />
			) : (
				<DarkModeIcon sx={NavItem} onClick={toggleTheme} />
			)}

			<FavoriteBorderIcon sx={NavItem} />
			<ShoppingBagOutlinedIcon sx={NavItem} />
			{isLogin ? (
				<>
					<ImageContainer onClick={() => setMenuState(!menuState)}>
						<Image
							loader={() => userLogoPath}
							src={userLogoPath}
							alt='User Logo'
							width={40}
							height={40}
						/>
					</ImageContainer>
					<HeaderNavMenu ref={headerMenuRef}>
						<DropdownMenu active={menuState}>
							<MenuContent>
								<p>личный кабинет</p>
								{userRole === 1 ? (
									<p onClick={handleOpen}>создать организацию</p>
								) : userRole === 2 || 3 || 4 ? (
									<Link href={`/organization/${userOrg}`}>
										<p>страница организации</p>
									</Link>
								) : null}
								<OutButton onClick={logOutFunc}>выйти</OutButton>
							</MenuContent>
						</DropdownMenu>
					</HeaderNavMenu>
				</>
			) : (
				<Link href='/auth'>
					<PersonOutlinedIcon sx={NavItem} />
				</Link>
			)}
			<Modal
				open={open}
				onClose={handleClose}
				sx={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
			>
				<ModalContent setOpen={setOpen} />
			</Modal>
		</HeaderNavContainer>
	)
}
