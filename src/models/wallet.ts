export type WalletCoinType = {
  id: string;
  nameSymbol: string;
  amount: number;
}

export class WalletCoin implements WalletCoinType {
  id;
  nameSymbol;
  amount;

  constructor(
    id: string,
    nameSymbol: string,
    amount: number,
  ) {
    this.id = id;
    this.nameSymbol = nameSymbol;
    this.amount = amount;
  }
}
