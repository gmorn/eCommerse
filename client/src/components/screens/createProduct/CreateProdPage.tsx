import AddGalleryBlock from '@/components/blocks/product/createProductBlocks/addGalleryLBock/AddGalleryBlock'
import ProductGallery from '@/components/blocks/product/ploductGallery/ProductGallery'

type Props = {}



export default function CreateProdPage({}: Props) {
	return (
		<div>
      {/* <ProductGallery/> */}
			<AddGalleryBlock />
		</div>
	)
}
