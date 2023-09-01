import Layout from '@/components/layout/Layout'
import store from '@/store'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { GlobalStyles } from '../styles/global'
import '../styles/global.ts'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
