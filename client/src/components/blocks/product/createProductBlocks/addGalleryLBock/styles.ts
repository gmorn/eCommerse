import { styled } from 'styled-components'

export const AddGalleryContainer = styled.div`
	height: 380px;
	display: flex;
	align-items: center;
	gap: 10px;

	color: var(--color-text);

	input {
		display: none;
	}
`

export const AddSliderItems = styled.div`
	height: 320px;
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`

export const AddSliderItem = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 10px;
	border: dashed 3px var(--color-text);
	opacity: 0.5;
`

export const SliderItem = styled.div`
	max-height: 100px;
	min-height: 100px;
	max-width: 100px;
	min-width: 100px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	position: relative;

	button {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	img {
		height: 100px;
		width: 100px;
		object-fit: cover;
	}
`

export const FocusItem = styled.div`
	height: 320px;
	width: 320px;
	border-radius: 10px;
	border: dashed 3px var(--color-text);
	opacity: 0.5;
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: pointer;

	span {
		display: flex;
		gap: 10px;
		font-size: 20px;
		align-items: center;
		flex-direction: column;
		transition: 300ms;
	}

	&:hover {
		span {
			transform: scale(1.2);
		}
	}
`

export const ActiveItem = styled.div`
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	height: 320px;
	width: 320px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	position: relative;

	span {
		position: absolute;
		z-index: 2;
		display: flex;
		gap: 10px;
		font-size: 20px;
		align-items: center;
		text-align: center;
		flex-direction: column;
		transition: 300ms;
		background: none;
		opacity: 0;
		top: 35%;
		left: 35%;
	}

	&:hover {
		span {
			opacity: 0.7;
			transform: scale(1.2);
		}
	}

	img {
		height: 320px;
		width: 320px;
		object-fit: cover;
	}
`
