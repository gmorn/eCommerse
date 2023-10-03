import { MutableRefObject, useRef, useState, useEffect } from 'react'
import {
	CategoryTitle,
	HintItem,
	HintsBLock,
	Input,
	InputContainer
} from './styles'

type Props = {
	hints: string[]
	placeholder?: string
	value: string
	onChange: (param: string) => void
}

type RefObject<T> = MutableRefObject<T | null>

export default function InputWithHints({
	hints,
	placeholder,
	value,
	onChange
}: Props) {



	const [isInputFocused, setInputFocused] = useState(false)

	const [filteredHints, setFilteredHints] = useState<string[]>(hints)

	useEffect(() => {
		const lowerCaseValue = value.toLowerCase()
		const filtered = hints.filter(hint => hint.toLowerCase().includes(lowerCaseValue))
		setFilteredHints(filtered)
	}, [value, hints])

	const getValueFromHints = (value: string) => {
		setInputFocused(false)
		onChange(value)
	}

	const inputRef: RefObject<HTMLInputElement> = useRef(null)

	const handleCategoryTitleClick = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	return (
		<>
			<InputContainer>
				{value !== '' && !isInputFocused ? (
					<CategoryTitle
						onClick={handleCategoryTitleClick}
					>
						Категория:
					</CategoryTitle>
				) : null}

				<Input
					onChange={(e) => onChange(e.target.value)}
					active={value !== ''}
					placeholder={placeholder}
					onFocus={() => setInputFocused(true)}
					value={value}
					onBlur={() => setInputFocused(false)}
					status={filteredHints.length === 0}
					ref={inputRef}
				/>
				<HintsBLock active={isInputFocused} status={filteredHints.length === 0}>
					{filteredHints.map((hint) => (
						<HintItem
							onMouseDown={(e) => {
								e.stopPropagation()
								getValueFromHints(hint)
							}}
						>
							{hint}
						</HintItem>
					))}
				</HintsBLock>
			</InputContainer>
		</>
	)
}
