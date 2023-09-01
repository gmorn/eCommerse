import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import userSlice from './user/userSlice'

const store = configureStore({
	reducer: {
		theme: themeSlice,
		user: userSlice
	}
})

export default store

export type T_rootState = ReturnType<typeof store.getState>
export type T_appDispatch = typeof store.dispatch
