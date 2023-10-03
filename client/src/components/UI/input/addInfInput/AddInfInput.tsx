import { InfInput } from './styles'

type Props = {
	onChange?: (param: string) => void
  onFocus?: () => void;
  onBlur?: () => void;
	value?: string
	placeholder?: string
	type?: string
}

export default function AddInfInput({ onChange, onFocus, onBlur, value, placeholder, type }: Props) {
	return (
		<InfInput
			placeholder={placeholder ? placeholder : ''}
			value={value}
			type={type ? type : 'text'}
			status={value !== ''}
			onChange={(e) => onChange?.(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
		/>
	)
}
