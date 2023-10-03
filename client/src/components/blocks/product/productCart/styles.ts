import styled, { css } from 'styled-components'

type T_Active = {
	active: boolean
}

type T_State = {
	state: boolean
}

export const CartContainer = styled.div<T_State>`
	position: relative;
	width: 224px;
	height: 364px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 12px;
	box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);

	${(props) =>
		props.state &&
		css`
			width: 472px;
			height: 134px;
			flex-direction: row;
		`}
`

export const FavoriteIconBlock = styled.div<T_State>`
	position: absolute;
	z-index: 4;
	top: 10px;
	padding: 6px 6px 5px;
	display: flex;
	align-items: center;
	background: #f0f8ff;
	border-radius: 50%;
	cursor: pointer;
	${(props) =>
		props.state
			? css`
					left: 5px;
					transform: scale(0.8);
					top: 5px;
			  `
			: css`
					right: 10px;
			  `}
`

export const AddBasketButton = styled.div<T_State>`
	position: absolute;
	top: 55px;
	z-index: 4;
	padding: 6px 6px 5px;
	display: flex;
	align-items: center;
	background: #f0f8ff;
	border-radius: 50%;
	cursor: pointer;
	${(props) =>
		props.state
			? css`
					left: 5px;
					transform: scale(0.8);
					top: 45px;
			  `
			: css`
					right: 10px;
			  `}
`

export const Gallery = styled.div<T_State>`
	position: relative;
	${(props) =>
		props.state &&
		css`
			max-width: 156px;
			max-height: 134px;
		`}
`

export const GalleryItem = styled.div<T_Active & T_State>`
	display: none;

	${(props) =>
		props.active &&
		css`
			display: block;
		`}

	img {
		object-fit: cover;
		${(props) =>
			props.state &&
			css`
				width: 156px;
				height: 134px;
			`}
	}
`

export const InfBlock = styled.div<T_State>`
	color: var(--color-text);
	padding: 10px;
	z-index: 3;
	${(props) =>
		props.state &&
		css`
			width: 290px;
		`}
`

export const GalleryNav = styled.div<T_State>`
	position: absolute;
	top: 240px;
	left: 50%;
	transform: translateX(-50%);
	background: none;
	display: flex;
	gap: 8px;
	align-items: center;
	${(props) =>
		props.state &&
		css`
			top: 110px;
		`}
`

export const GalleryNavItem = styled.div<T_Active>`
	width: 8px;
	height: 8px;
	border-radius: 8px;
	background: #c7c7c7;
	${(props) =>
		props.active &&
		css`
			background: var(--color-accent);
		`}
`

export const PriceBlock = styled.div`
	font-size: 22px;
	font-weight: 700;
`

export const RatingBlock = styled.div`
	font-size: 22px;
	font-weight: 700;
	display: flex;
	align-items: center;
	gap: 3px;
`

export const NameBlock = styled.div<T_State>`
	font-size: 14px;
	font-weight: 500;
	margin: 10px 0;
	${(props) =>
		props.state &&
		css`
			margin-bottom: 40px;
		`}
`

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`

export const IconBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	opacity: 0.7;
`

export const DataBlock = styled.div`
	font-size: 12px;
	font-weight: 400;
	opacity: 0.7;
`
