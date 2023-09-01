import GallerySlider from '@/components/UI/slider/gallerySlider/GallerySlider'
import Slider from '@/components/UI/slider/slider/Slider'
import { useState } from 'react'
import { BlockTwo, BlockOne } from './styles'

type Props = {}

export default function ProductGallery({}: Props) {
	const [top, setTop] = useState(0)

	const arr = [1, 2, 3]

	return (
		<>
			{/* <Slider>
				{arr.map((item) => (
					<BlockOne number={item}>{item}</BlockOne>
				))}
			</Slider> */}
			{/* <GallerySlider>
				{arr.map((item) => (
					<BlockTwo number={item}>{item}</BlockTwo>
				))}
			</GallerySlider> */}
		</>
	)
}
