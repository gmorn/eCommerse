import DeleteButton from '@/components/UI/button/deleteButton/DeleteButton'
import GallerySlider from '@/components/UI/slider/gallerySlider/GallerySlider'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import { useEffect, useRef, useState } from 'react'
import {
	ActiveItem,
	AddGalleryContainer,
	AddSliderItem,
	AddSliderItems,
	FocusItem,
	SliderItem
} from './styles'
import { T_NewProduct } from '@/components/screens/createProduct/type'

type Props = {
	product: T_NewProduct
	setProduct: (param: T_NewProduct) => void
}

export default function AddGalleryBlock({ product, setProduct }: Props) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleButtonClick = () => {
		fileInputRef.current?.click()
	}

	const [images, setImages] = useState<string[]>([])

	const [activeSlide, setActiveSlide] = useState<number>(0)

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImages((prevImages) => {
			const newImages: string[] = []
			if (event.target.files && event.target.files.length > 0) {
				Array.from(event.target.files).forEach((file) => {
					const imageUrl = URL.createObjectURL(file)
					newImages.push(imageUrl)
				})
				setActiveSlide(0)
			}
			return newImages
		})

		const newGallery: File[] = [];

    if (event.target.files && event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file) => {
        newGallery.push(file);
      });

      setActiveSlide(0);
      setProduct({... product, gallery: newGallery})
    }
	}

	const handleItemClick = (index: number) => {
		setActiveSlide(index)
		console.log(index)
	}

	const deleteImage = (indexImage: number) => {
		deleteImageFormGallery(indexImage)
		const result = images.filter((_, index) => index !== indexImage)
		if (result.length === 0) {
			setImages([])
			return
		}
		setActiveSlide(0)
		setImages(result)
	}

	const deleteImageFormGallery = (indexImage: number) => {
		const gallery = product.gallery
		const result = gallery.filter((_, index) => index !== indexImage)
		setProduct({... product, gallery: result})
	}

	useEffect(() => {
		console.log(activeSlide)
	}, [activeSlide])

	return (
		<>
			<AddGalleryContainer>
				{images.length === 0 ? (
					<>
						<AddSliderItems>
							<AddSliderItem />
							<AddSliderItem />
							<AddSliderItem />
						</AddSliderItems>
						<FocusItem onClick={handleButtonClick}>
							<span>
								<UploadFileIcon sx={{ width: '50px', height: '50px' }} />
								Выберите
								<br />
								файл
							</span>
						</FocusItem>
					</>
				) : (
					<>
						<GallerySlider>
							{images.map((image, index) => (
								<SliderItem>
									<DeleteButton onClick={() => deleteImage(index)} />
									<img
										src={image ? image : ''}
										alt=''
										onClick={() => handleItemClick(index)}
									/>
								</SliderItem>
							))}
						</GallerySlider>
						<ActiveItem onClick={handleButtonClick}>
							<span>
								<UploadFileIcon
									sx={{ width: '50px', height: '50px', background: 'none' }}
								/>
								Выберите
								<br />
								файл
							</span>
							<img src={images[activeSlide]} />
						</ActiveItem>
					</>
				)}
				<input
					type='file'
					multiple
					accept='.jpg, .jpeg, .png, .webp, .raw, .tiff, .psd'
					onChange={handleFileSelect}
					ref={fileInputRef}
				/>
			</AddGalleryContainer>
		</>
	)
}
