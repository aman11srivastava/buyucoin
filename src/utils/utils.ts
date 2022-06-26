export const all_coins: string = "https://api.buyucoin.com/ticker/v1.0/liveData";

export const getSingleCoinData = (marketName: string) => {
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
        id: 2,
        name: "Market Name"
    },
    {
        id: 3,
        name: "Currency Name"
    },
    {
        id: 4,
        name: "Bid"
    },
    {
        id: 5,
        name: "Ask"
    },
    {
        id: 6,
        name: 'Rate'
    },
    {
        id: 7,
        name: "Volume"
    },
    {
        id: 7,
        name: "Current Active Status"
    }
]
