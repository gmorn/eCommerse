import { T_Product } from '@/components/screens/home/HomePage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface I_Products {
	products: T_Product[]
	activeCategory: number | undefined
	activeSortMethod: number | undefined
}

const initialState: I_Products = {
	products: [],
	activeCategory: undefined,
	activeSortMethod: undefined
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<T_Product[]>) => {
			state.products = action.payload
		},
		setActiveCategory: (state, action: PayloadAction<number | undefined>) => {
			state.activeCategory = action.payload
		},
		setActiveSortMethod: (state, action: PayloadAction<number>) => {
			state.activeSortMethod = action.payload
		}
	}
})

export const { addProducts, setActiveCategory, setActiveSortMethod } = productSlice.actions
export default productSlice.reducer
