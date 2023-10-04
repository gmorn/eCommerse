import { T_Product } from '@/components/screens/home/HomePage'
import { host } from '@/constants/host'
import { formatDate } from '@/utils/date'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import StarIcon from '@mui/icons-material/Star'
import Image from 'next/image'
import { useState } from 'react'
import {
	AddBasketButton,
	CartContainer,
	DataBlock,
	FavoriteIconBlock,
	Flex,
	Gallery,
	GalleryItem,
	GalleryNav,
	GalleryNavItem,
	IconBlock,
	InfBlock,
	NameBlock,
	PriceBlock,
	RatingBlock
} from './styles'

type Props = {
	product: T_Product
	cartState: boolean
}

export default function ProductCart({ product, cartState }: Props) {
	const [favState, setFavState] = useState(false)
	const [basketButtonState, setBasketButtonState] = useState(false)

	const [activeImage, setActiveImage] = useState<number>(0)

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const galleryWidth = cartState ? 156 : 224
		const numImages = product.gallery.length
		const mouseX = event.nativeEvent.offsetX
		const newIndex = Math.floor((mouseX / galleryWidth) * numImages)

		setActiveImage(newIndex)
	}

	const handleMouseLeave = () => {
		setActiveImage(0)
	}

	return (
		<CartContainer state={cartState}>
			<FavoriteIconBlock
				state={cartState}
				onClick={() => setFavState(!favState)}
			>
				<FavoriteIcon
					sx={{
						color: favState ? 'var(--color-accent)' : '#282828'
					}}
				/>
			</FavoriteIconBlock>
			<AddBasketButton
				state={cartState}
				onClick={() => setBasketButtonState(!basketButtonState)}
			>
				{!basketButtonState ? (
					<AddShoppingCartIcon
						sx={{
							color: '#282828'
						}}
					/>
				) : (
					<DeleteForeverIcon
						sx={{
							color: '#282828'
						}}
					/>
				)}
			</AddBasketButton>
			<Gallery
				state={cartState}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				{product.gallery.map((_, index) => (
					<GalleryItem state={cartState} active={index === activeImage}>
						<Image
							loader={() => `${host + product.gallery[index]}`}
							src={`${host + product.gallery[index]}`}
							alt='User Logo'
							width={270}
							height={260}
						/>
					</GalleryItem>
				))}
				<GalleryNav state={cartState}>
					{product.gallery.map((_, index) => (
						<GalleryNavItem active={index === activeImage} />
					))}
				</GalleryNav>
			</Gallery>
			<InfBlock state={cartState}>
				<Flex>
					<PriceBlock>{product.price} ₽</PriceBlock>
					<RatingBlock>
						<StarIcon sx={{ height: '25px', width: '25px' }} />
						{product.rating}
					</RatingBlock>
				</Flex>
				<NameBlock state={cartState}>{product.name}</NameBlock>
				<Flex>
					<IconBlock>
						<ModeCommentIcon sx={{ height: '13px', width: '13px' }} />
						{product.comment_count}
					</IconBlock>
					<DataBlock>{formatDate(product.date)}</DataBlock>
				</Flex>
			</InfBlock>
		</CartContainer>
	)
}
