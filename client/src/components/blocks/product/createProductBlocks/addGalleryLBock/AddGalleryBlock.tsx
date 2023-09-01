import UploadFileIcon from '@mui/icons-material/UploadFile'
import { useRef, useState } from 'react'
import {
	AddGalleryContainer,
	AddSliderItem,
	AddSliderItems,
	FocusItem
} from './styles'

type Props = {}

export default function AddGalleryBlock({}: Props) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleButtonClick = () => {
		fileInputRef.current?.click()
	}

	const [image, setImage] = useState(null)

	const onImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]))
		}
	}
	// const handleNewFileChange: React.ChangeEventHandler<HTMLInputElement> = ( event ) => {
	//     const fileList = event.target.files;
	//     setFileList(fileList)
	//     console.log(fileList);
	//     if (fileList && fileList.length > 0) {
	//         const file = fileList[0];
	//         if ( id !== null ) {
	//             newHeader( file, id )
	//             console.log(file);
	//         }
	//     }
	// };

	return (
		<AddGalleryContainer>
			<AddSliderItems>
				<AddSliderItem />
				<AddSliderItem />
				<AddSliderItem />
			</AddSliderItems>
			<FocusItem>
				<span>
					<UploadFileIcon sx={{ width: '50px', height: '50px' }} />
					Выберите
					<br />
					файл
				</span>
			</FocusItem>
		</AddGalleryContainer>
		// <input
		// 	type='file'
		// 	multiple
		//   accept=".jpg, .jpeg, .png, .webp, .raw, .tiff, .psd"
		// 	onChange={onImageChange}
		// 	ref={fileInputRef}
		// />
		// <img src={image ? image : ''} alt="" />
		// <MainButton onClick={handleButtonClick}>изменить</MainButton>
	)
}
