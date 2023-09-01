import { styled } from 'styled-components'

export const AddGalleryContainer = styled.div`
	height: 380px;
	display: flex;
	align-items: center;
`

export const AddSliderItems = styled.div`
	height: 320px;
	width: 100px;
	margin-right: 10px;
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
