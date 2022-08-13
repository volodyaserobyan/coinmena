import React from "react"

import { isEmpty } from "../../helpers/utils"
import useTrade from "../../hooks/useTrade"

import './Trade.scss'

const Trade: React.FC = () => {
    const {
        option,
        swapClick,
        count,
        user,
        assetsData,
        dollarAmount,
        handleChangeInput,
        handleSelectChange,
        handleSubmit
    } = useTrade()
    return (
        <div className="Trade page-wrapper">
            <form onSubmit={handleSubmit} className="Trade-form">
                <div className="Trade-form__assets">
                    <input
                        value={count}
                        disabled={isEmpty(user)}
                        onChange={handleChangeInput} />
                    <select onChange={handleSelectChange} value={option}>
                        {assetsData?.map((item, index) =>
                            <option key={index} defaultValue={item[0]} value={item[0]}>{item[0]}</option>
                        )}
                    </select>
                </div>
                <button className="Trade-form__btn" onClick={swapClick} >Swap</button>
                <div className="Trade-form__usd">
                    <p>{dollarAmount} $</p>
                </div>
            </form>
        </div>
    )
}

export default Trade