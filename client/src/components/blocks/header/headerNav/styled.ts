import styled from 'styled-components'

export const HeaderNavContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	position: absolute;
	right: 0;
	color: var(--color-text);
`
export const ImageContainer = styled.div`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const HeaderNavMenu = styled.div`
	position: absolute;
	right: 0px;
	top: 50px;
`

export const MenuContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 7px;
	transition: 300ms;

	a {
		text-decoration: none;
	}

	p {
		cursor: pointer;
		&:hover {
			color: var(--color-accent);
		}
	}
`

export const OutButton = styled.div`
	color: var(--color-red);
	cursor: pointer;
	&:hover {
		color: var(--color-red);
	}
`


