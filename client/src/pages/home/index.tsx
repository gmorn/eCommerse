import HomePage from '@/components/screens/home/HomePage'
import { host } from '@/constants/host'
import Image from 'next/image'

type Props = {}

export default function ({}: Props) {
	return (
		<div>
			{/* <Image
				loader={() => host + '/product/image/hCSu4ywmFU.jpg'}
				src={host + '/product/image/hCSu4ywmFU.jpg'}
				alt='User Logo'
				width={100}
				height={100}
			/> */}
			<HomePage />
		</div>
	)
}
