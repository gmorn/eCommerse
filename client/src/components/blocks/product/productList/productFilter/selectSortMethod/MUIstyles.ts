import TextField from '@mui/material/TextField'
import { styled } from '@mui/system'

export const CustomTextField = styled(TextField)`
	& .MuiInputBase-root {
		&::before {
			border-bottom: 2px solid var(--color-text); // Черная обводка до фокуса
		}
		&:hover:not(.Mui-disabled):before {
			border-bottom: 2px solid var(--color-text); // Черная обводка при наведении
		}
		&::after {
			border-bottom: 2px solid var(--color-text); // Черная обводка после фокуса
		}
	}
	& .MuiFormLabel-root {
		color: var(--color-text); // Черный цвет текста label
	}
	& .MuiSelect-icon {
		color: var(--color-text); // Черный цвет иконки стрелки
	}
	& .MuiPopover-paper {
		background-color: var(--color-main); // Цвет фона выпадающего меню
	}
`
