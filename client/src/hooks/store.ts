import { T_appDispatch, T_rootState } from '@/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type DispatchFunc = () => T_appDispatch

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<T_rootState> = useSelector
