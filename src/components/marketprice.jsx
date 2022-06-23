import { Component } from "react";
import "../styles/marketprice.css";
class MarketPrice extends Component {
  market() {
    fetch("https://api.wallex.ir/v1/markets")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = data.result.symbols;

        var coins = [
          "BTCUSDT",
          "ETHUSDT",
          "LTCUSDT",
          "DASHUSDT",
          "ADAUSDT",
          "CAKEUSDT",
          "ATOMUSDT",
          "BCHUSDT",
          "EOSUSDT",
          "BNBUSDT",
          "LINKUSDT",
          "SANDUSDT",
          "YFIUSDT",
          "CELRUSDT",
          "XRPUSDT",
         
        ];

        coins = coins.map((coin) => {
          let name = data[coin].baseAsset;
          let price = data[coin].stats.bidPrice;
          let high = data[coin].stats["24h_lowPrice"];
          let low = data[coin].stats["24h_highPrice"];

          price = parseFloat(price).toFixed(3);
          high = parseFloat(high).toFixed(3);
          low = parseFloat(low).toFixed(3);

          return {
            name,
            price,
            high,
            low,
          };
        });

        coins.forEach((coin) => {
          var tag = createTag(coin);
          document.querySelector("table tbody").appendChild(tag);
        });

        function createTag(coin) {
          var newTr = document.createElement("tr");
          Object.values(coin).forEach((element) => {
            var newTd = document.createElement("td");
            newTd.innerHTML = element;
            newTr.appendChild(newTd);
          });
          return newTr;
        }
      });
  }

  render() {
    this.market();
    return (
      <>
       
        
        <table>
          
          
       
          <thead>
 
            <tr>
              <th>Currency</th>
              <th>Last price</th>
              <th>Low</th>
              <th>High</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </>
    );
  }
}

export default MarketPrice;
