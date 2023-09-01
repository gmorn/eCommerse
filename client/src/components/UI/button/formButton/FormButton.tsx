import React from 'react'
import { FormButtonStyles } from './styles'

type Props = {
	children: React.ReactNode
	disabled?: boolean
	onClick?: () => void
}

export default function FormButton({ children, disabled, onClick }: Props) {
	return (
		<FormButtonStyles
			disabled={disabled}
			onClick={onClick ? () => onClick() : () => {}}
		>
			{children}
		</FormButtonStyles>
	)
}
