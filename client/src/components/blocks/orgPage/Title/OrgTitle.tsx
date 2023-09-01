import { T_Org } from '@/components/screens/organization/org.types'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import StarIcon from '@mui/icons-material/Star'
import { RatingContainer, TitleContainer } from './style'

type Props = {
	org: T_Org
}

export default function OrgTitle({ org }: Props) {
	return (
		<TitleContainer>
			<h1>{org.name}</h1>
			<RatingContainer>
				<StarIcon />
				<h2>{org.rating}</h2>
			</RatingContainer>
			<RatingContainer>
				<ShoppingBasketIcon />
				<h2>{org.product_rating}</h2>
			</RatingContainer>
		</TitleContainer>
	)
}
