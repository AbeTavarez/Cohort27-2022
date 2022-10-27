import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

const Currencies = () => {
  // const [allCoins, setAllCoins] = useState(null)
  // useEffect(()=> {
  //   getAllCoins()
  // },[])
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  // const getAllCoins = async () => {
  //   const res = await fetch(`https://rest-sandbox.coinapi.io/v1/assets?apikey=2FFA9750-D2ED-40B9-ACBD-D1C027E35041`)
  //   const data = await res.json()
  //   console.log(data);
  //   setAllCoins(data)
  // }
  return (
    <div>
      <h1>Currencies Page</h1>

      {currencies.map((coin) => {
        const { name, symbol } = coin;
        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}

{/* {allCoins && allCoins.asset_id && allCoins.map((coin, idx) => {
        const { asset_id } = coin;
        
        return (
          <Link to={`/price/${asset_id}`}>
            <h2>{asset_id}</h2>
          </Link>
        )
      })} */}
    </div>
  );
};

export default Currencies;
