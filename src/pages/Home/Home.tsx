import React from "react"

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import useHome from "../../hooks/useHome"

import './Home.scss'

const Home: React.FC = () => {
    const { loading, assets, loadMore, sortBy } = useHome()
    return loading ? <LoadingSpinner /> : (
        <div className="Home page-wrapper">
            <div className="Home-table__title">
                <div className="Home-sort">
                    Sort by::
                    <button type="button" className="Home-btn" onClick={() => sortBy('name')}>By Name</button>
                    <button type="button" className="Home-btn" onClick={() => sortBy('price')}>by Price</button>
                </div>
                <ul className="Home-table__block">
                    <li className="Home-table__item">Asset</li>
                    <li className="Home-table__item">Price</li>
                    <li className="Home-table__item">Buy/Sell</li>
                </ul>
            </div>
            <table className="Home-table">
                {assets?.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td data-label="Asset">{item[0]}</td>
                            <td data-label="Price">{item[1]}</td>
                            <td>
                                <select>
                                    <option value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <div className="Home page-wrapper__button">
                <button type="button" className="Home-btn" onClick={loadMore}>Load More</button>
            </div>
        </div>
    )
}

export default Home