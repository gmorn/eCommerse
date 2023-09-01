import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	isLogin: boolean
	userRole: number | null
	userOrg: string | null
}

const initialState: State = {
	isLogin: false,
	userOrg: null,
	userRole: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsLogin: (state, action: PayloadAction<boolean>) => {
			state.isLogin = action.payload
		},
		setUserRole: (state, action: PayloadAction<number | null>) => {
			state.userRole = action.payload
		},
		setUserOrg: (state, action: PayloadAction<string | null>) => {
			state.userOrg = action.payload
		}
	}
})

export const { setIsLogin, setUserRole, setUserOrg } = userSlice.actions
export default userSlice.reducer
