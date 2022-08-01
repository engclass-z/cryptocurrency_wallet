export type CoinType = {
  id: string;
  label: string;
  nameSymbol: string;
  rate: number;
}

class Coin implements CoinType {
  id;
  label;
  nameSymbol;
  rate: number;

  constructor(
    id: string,
    label: string,
    nameSymbol: string,
    rate: number,
  ) {
    this.id = id;
    this.label = label;
    this.nameSymbol = nameSymbol;
    this.rate = rate;
  }

}

export default Coin;
