import React from "react";

interface AssetsTableProps {
  assetsData: Array<{
    name: string;
    symbol: string;
    decimal: number;
    mint: null | string;
    coingeckoId: string;
    walletBalance?: number;
    zebecBalance?: number;
  }>;
}

const AssetsTable: React.FC<AssetsTableProps> = (props) => {
  const { assetsData } = props;
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th>Token</th>
            <th>Wallet Balance</th>
            <th>Zebec Balance</th>
            <th>Streaming Balance</th>
          </tr>
        </thead>
        <tbody>
          {assetsData.map((assetData, index) => {
            return (
              <tr key={`${assetData.symbol}-${index}`} className="text-center">
                <td>{assetData.symbol}</td>
                <td>{assetData?.walletBalance || 0}</td>
                <td>{assetData?.zebecBalance || 0}</td>
                <td>---</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
