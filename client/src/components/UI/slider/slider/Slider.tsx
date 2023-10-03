import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React, { ReactNode, useEffect, useState } from 'react'
import { MainContainer, Pages, Window } from './styles'

type Props = { children: React.ReactNode[] }

export default function Slider({ children }: Props) {
	const [offset, setOffset] = useState(-450)

	const [pages, setPages] = useState<ReactNode[]>([])
	const [transition, setTransition] = useState(true)
	useEffect(() => {
		if (children) {
			setPages([children[children.length - 1], ...children, children[0]])
			return
		}
	}, [children])

	useEffect(() => {
		if (offset === -2700) {
			setOffset(-450)
			setTimeout(() => {
				setTransition(true)
			}, 50)
		}
		if (offset === 0) {
			setOffset(-2250)
			setTimeout(() => {
				setTransition(true)
			}, 50)
		}
	}, [transition])

	const hendleLeftArrowClick = () => {
		if (offset !== -450) {
			setOffset(offset + 450)
		} else {
			setOffset(offset + 450)
			setTimeout(() => {
				setTransition(false)
			}, 300)
		}
	}

	const hendleRightArrowClick = () => {
		if (offset !== -2250) {
			setOffset(offset - 450)
		} else {
			setOffset(offset - 450)
			setTimeout(() => {
				setTransition(false)
			}, 300)
		}
	}

	return (
		<MainContainer>
			<ChevronLeftIcon
				onClick={hendleLeftArrowClick}
				sx={{ cursor: 'pointer' }}
			/>
			<Window>
				<Pages transition={transition} count={offset}>
					{pages}
				</Pages>
			</Window>
			<ChevronRightIcon
				onClick={hendleRightArrowClick}
				sx={{ cursor: 'pointer' }}
			/>
		</MainContainer>
	)
}
