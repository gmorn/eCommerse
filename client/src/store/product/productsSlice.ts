import { T_Product } from '@/components/screens/home/HomePage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface I_Products {
  products: T_Product[]
}

const initialState: I_Products = {
  products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<T_Product[]>) => {
      state.products = action.payload
    },
  }
})

export const { addProducts } = productSlice.actions
export default productSlice.reducer