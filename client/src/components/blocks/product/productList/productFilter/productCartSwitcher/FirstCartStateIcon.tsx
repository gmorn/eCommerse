import { useState } from 'react'

type Props = {
	active: boolean
  onClick: () => void
}

export default function FirstCartStateIcon({ active, onClick }: Props) {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='31'
			height='31'
			viewBox='0 0 31 31'
			fill='none'
			style={{ cursor: 'pointer' }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			opacity={active ? '1' : isHovered ? '1' : '0.7'}
      onClick={onClick}
		>
			<rect
				x='1.1'
				y='1.1'
				width='11.8'
				height='11.8'
				rx='1.9'
				stroke={active ? 'var(--color-accent)' : 'var(--color-text)'}
				strokeWidth='2.2'
			/>
			<rect
				x='18.1'
				y='1.1'
				width='11.8'
				height='11.8'
				rx='1.9'
				stroke={active ? 'var(--color-accent)' : 'var(--color-text)'}
				strokeWidth='2.2'
			/>
			<rect
				x='1.1'
				y='18.1'
				width='11.8'
				height='11.8'
				rx='1.9'
				stroke={active ? 'var(--color-accent)' : 'var(--color-text)'}
				strokeWidth='2.2'
			/>
			<rect
				x='18.1'
				y='18.1'
				width='11.8'
				height='11.8'
				rx='1.9'
				stroke={active ? 'var(--color-accent)' : 'var(--color-text)'}
				strokeWidth='2.2'
			/>
		</svg>
	)
}
