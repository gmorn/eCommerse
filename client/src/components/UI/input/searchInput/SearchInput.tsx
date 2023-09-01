import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { CloseIconStyles, ImageContainer, SearchForm, SearchIconStyles } from './styles'

type Props = {}

export default function SearchInput({}: Props) {
	type RefObject<T> = MutableRefObject<T | null>

	const [formState, setFormState] = useState<boolean>(false)
	const [border, setBorder] = useState<boolean>(false)
	const [value, setValue] = useState('')

	const searchFormRef: RefObject<HTMLInputElement> = useRef(null)
	const searchIconRef: RefObject<HTMLImageElement> = useRef(null)

	useEffect(() => {
		if (!searchFormRef) return
		if (value) return

		const hendelClick = (e: MouseEvent) => {
			if (searchIconRef.current?.contains(e.target as Node)) return

			if (
				searchFormRef.current &&
				!searchFormRef.current.contains(e.target as Node)
			) {
				setFormState(false)
			}
		}

		document.addEventListener('mousedown', hendelClick)
		return () => {
			document.removeEventListener('mousedown', hendelClick)
		}
	})

	useEffect(() => visebleBorder(), [formState])

	const switchForm = () => {
		setFormState(!formState)
	}

	const visebleBorder = () => {
		if (formState) {
			setBorder(true)
		} else {
			setTimeout(() => {
				setBorder(false)
			}, 350)
		}
	}

	const clearForm = () => {
		setValue('')
	}

	return (
		<SearchForm active={formState} border={border}>
			<input
				id='YOURID'
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				ref={searchFormRef}
			/>
			{!value ? (
				<ImageContainer ref={searchIconRef}>
					<SearchIcon sx={SearchIconStyles} onClick={switchForm} />
				</ImageContainer>
			) : (
				<ImageContainer ref={searchIconRef}>
					<ClearIcon sx={CloseIconStyles} onClick={clearForm} />
				</ImageContainer>
			)}
		</SearchForm>
	)
}
