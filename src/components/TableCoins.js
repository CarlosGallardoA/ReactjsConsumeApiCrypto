import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price", "Change", "24h Volumen"];
const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <table className="table table-dark table-hover mt-4">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={coin.id} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
