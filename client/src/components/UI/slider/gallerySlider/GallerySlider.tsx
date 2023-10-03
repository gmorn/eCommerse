import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import React, { Children, ReactNode, useEffect, useState } from 'react'
import { MainContainer, Pages, Window } from './styles'

type Props = { children: React.ReactNode[] }

export default function GallerySlider({ children }: Props) {
	const [offset, setOffset] = useState(-340)
	const [pages, setPages] = useState<ReactNode[]>([])
	const [transition, setTransition] = useState(true)
	const [disabledState, setDisabledState] = useState(false)

	useEffect(() => {
		if (children && children.length > 2) {
			setPages([
				children[children.length - 3],
				children[children.length - 2],
				children[children.length - 1],
				...children,
				children[0],
				children[1],
				children[2]
			])
			return
		}
		setPages([...children])
		setOffset(-10)
	}, [children])

	useEffect(() => {
		// if (offset === -890) {
		if (offset === ((pages.length - 3) * 110 + 10) * -1) {
			setOffset(-340)
			setTimeout(() => {
				setTransition(true)
			}, 50)
		}
		if (offset === -10) {
			setOffset(((pages.length - 6) * 110 + 10) * -1)
			// setOffset(-560)
			setTimeout(() => {
				setTransition(true)
			}, 50)
		}
	}, [transition])

	useEffect(() => {
		if (disabledState) {
			setTimeout(() => {
				setDisabledState(false)
			}, 300)
		}
	}, [disabledState])

	const hendleUpArrowClick = () => {
		if (!disabledState) {
			setDisabledState(true)
			if (offset !== -120) {
				setOffset(offset + 110)
			} else {
				setOffset(offset + 110)
				setTimeout(() => {
					setTransition(false)
				}, 300)
			}
		}
	}

	const hendleDownArrowClick = () => {
		if (!disabledState) {
			setDisabledState(true)
			// if (offset !== -780) {
			if (offset !== ((pages.length - 4) * 110 + 10) * -1) {
				setOffset(offset - 110)
			} else {
				setOffset(offset - 110)
				setTimeout(() => {
					setTransition(false)
				}, 300)
			}
		}
	}

	return (
		<MainContainer>
			{Children.count(children) > 2 ? (
				<KeyboardArrowUpIcon
					onClick={hendleUpArrowClick}
					sx={{ cursor: 'pointer' }}
				/>
			) : null}
			<Window>
				<Pages transition={transition} count={offset}>
					{pages}
				</Pages>
			</Window>
			{Children.count(children) > 2 ? (
				<KeyboardArrowDownIcon
					onClick={hendleDownArrowClick}
					sx={{ cursor: 'pointer' }}
				/>
			) : null}
		</MainContainer>
	)
}
