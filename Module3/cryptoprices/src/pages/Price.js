import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// https://rest-sandbox.coinapi.io/v1/quotes/current?apikey=2FFA9750-D2ED-40B9-ACBD-D1C027E35041

const Price = () => {
    const [coin, setCoin] = useState(null)

    // 2. Use the useEffect hook to make an api call
    useEffect(() => {
        getCoin()
    }, [])

    // 1. Store the apiKey and currency symbol in different variables
    const apiKey = '2FFA9750-D2ED-40B9-ACBD-D1C027E35041';
    // return an object with the matching URL params
    const params = useParams()

    // 3. Interpolate the apiKey and symbol in the fetch URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`;

    // Fetch the coin data
    const getCoin = async () => {
        try {
            // make the fetch request
            const res = await fetch(url)
            const data = await res.json()
            // 4. Save the resulting data in state
            setCoin(data)
        } catch (error) {
            console.log(error)

        }
    }

    // ===== Rendering
    // If data is loaded
    const loaded =() => {
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>${coin.rate}</h2>
            </div>
        )
    }

    // If data still loading
    const loading = () => <h1>Loading...</h1>

    return(
        <div>
            <h1>Price Page</h1>
            {coin && coin.rate ? loaded() : loading()}
        </div>
    )
}

export default Price