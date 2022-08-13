export const isEmpty = (obj: Object) => {
    return Object.keys(obj).length === 0;
}

export const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const calculateDollar = (count: number , price: number): number => {
    // As I don't know what formula should use here will do something like this
    return isNaN(count) ? 0 : count * price * 500
}

export const calculateToAmount = (count: number, price: number): number => {
    return isNaN(calculateDollar(count, price) / price / 500) ? 0 : calculateDollar(count, price) / price / 500
}