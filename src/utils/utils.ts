export const all_coins: string = "https://api.buyucoin.com/ticker/v1.0/liveData";

export const getSingleCoinData = (marketName: string | undefined) => {
    return `https://api.buyucoin.com/ticker/v1.0/liveData?symbol=${marketName}`
}

export interface coin_structure {
    LBRate: string
    LBVol: string
    LSRate: string
    LSVol: string
    LTRate: string
    LTVol: string
    ask: string
    baseCurrency: string
    baseCurrencyId: string
    bid: string
    c24: string
    c24p: string
    currToName: string
    h24: string
    isActive: boolean
    l24: string
    marketName: string
    quoteCurrency: string
    quoteCurrencyId: string
    sprd: string
    tVolAsk: string
    tVolBid: string
    tp24: string
    v24: string
}

export type table_header_type = {
    id: number
    name: string
}
export const table_header: table_header_type[] = [
    {
        id: 1,
        name: "Market Name"
    },
    {
        id: 2,
        name: "Currency Name"
    },
    {
        id: 3,
        name: "Bid"
    },
    {
        id: 4,
        name: "Ask"
    },
    {
        id: 5,
        name: 'Rate'
    },
    {
        id: 6,
        name: "Volume"
    },
    {
        id: 7,
        name: "Current Active Status"
    }
]

export function getColorOfContent (price1: string | undefined, price2: string | undefined): string {
    let num1: number = Number(price1);
    let num2: number = Number(price2);
    return num1 > num2 ? "green" : "red"
}
