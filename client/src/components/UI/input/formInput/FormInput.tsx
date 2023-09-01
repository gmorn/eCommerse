import { ChangeEvent } from 'react'
import { Input, Label } from './styles'

type Props = {
	type?: React.HTMLInputTypeAttribute
	placeholder?: string
	label?: string
	value?: string
	onChange?: (str: string) => void
	status: boolean | null
}

export default function FormInput({
	onChange,
	value,
	label,
	placeholder,
	type,
	status = null
}: Props) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value)
		}
	}

	return (
		<>
			<Input
				onChange={handleChange}
				value={value}
				type={type !== undefined ? type : 'text'}
				status={status}
				placeholder={placeholder}
			/>
			<Label status={status !== null ? !status : null }>{label}</Label>
		</>
	)
}
