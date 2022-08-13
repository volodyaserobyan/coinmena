import { useEffect, useState } from "react"
import { IAssets } from "../global/interface"

import { calculateDollar, calculateToAmount } from "../helpers/utils"
import { getAssets } from "../redux/slices/assetsSlice/assets.actions"
import { assets } from "../redux/slices/assetsSlice/assets.selector"
import { authSelectors } from "../redux/slices/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"


const useTrade = () => {
    const assetsData = useAppSelector(assets)
    let swap = false
    const current = assetsData !== null ? assetsData[0] : null
    const [count, setCount] = useState<number>()
    const [dollarAmount, setDollarAmount] = useState<number>()
    const [currentAsset, setCurrentAsset] = useState<IAssets | null>(current)
    const [option, setOption] = useState<string>('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!assetsData) {
            dispatch(getAssets())
        }
    }, [dispatch, assetsData])

    const user = useAppSelector(authSelectors.user)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(e.target.value)
        const asset = assetsData?.find(item => item[0].toString() === e.target.value)
        setCurrentAsset(asset as IAssets)
        setDollarAmount(calculateDollar(count as number, (asset as IAssets)[1]))
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(e.target.value))
        setDollarAmount(calculateDollar(count as number, 
            currentAsset !== null ? (currentAsset as IAssets)[1] : 0))
    }

    const swapClick = () => {
        if(!swap) {
            setCount(Number(dollarAmount))
            setDollarAmount(calculateToAmount(count as number, (currentAsset as IAssets)[1] || 0))
            swap = true
        } else {
            setCount(calculateToAmount(count as number, (currentAsset as IAssets)[1] || 0))
            setDollarAmount(dollarAmount)
            swap = false
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return {
        count,
        handleSelectChange,
        assetsData,
        user,
        handleChangeInput,
        option,
        dollarAmount,
        swapClick,
        handleSubmit
    }
}

export default useTrade