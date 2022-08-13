import { useEffect, useState } from "react"

import { assetsSelectors } from "../redux/slices/assetsSlice"
import { getAssets, setCount, setSortBy } from "../redux/slices/assetsSlice/assets.actions"
import { limitedAssets } from "../redux/slices/assetsSlice/assets.selector"
import { useAppDispatch, useAppSelector } from "../redux/store"

const useHome = () => {
    const [counter, setCounter] = useState<number>(10)
    const dispatch = useAppDispatch()
    const loading = useAppSelector(assetsSelectors.loading)
    const assets = useAppSelector(limitedAssets)
    useEffect(() => {
        if(!assets) {
            dispatch(getAssets())
        }
    }, [dispatch, assets])


    const loadMore = () => {
        dispatch(setCount(counter + 10))
        setCounter(prev => prev + 10)
    }

    const sortBy = (sort: 'name' | 'price') =>{
        dispatch(setSortBy(sort))
    }

    return {
        loading,
        assets,
        sortBy,
        loadMore,
    }
}

export default useHome