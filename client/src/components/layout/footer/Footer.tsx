import styled from 'styled-components'

type Props = {}

const FooterContainer = styled.div`
	width: 100%;
	padding: 20px;
	display: flex;
	justify-content: center;
  position: absolute; 
  right: 0;
  bottom: 0;
`

export default function Footer({}: Props) {
	return <FooterContainer>Все права защищены &copy;</FooterContainer>
}
