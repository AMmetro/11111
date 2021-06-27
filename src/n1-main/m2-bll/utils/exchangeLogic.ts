


export const changeCurrency={



     getAbreviature (amount:number,currencyId:string, currencyList: Array<any>) {
         const AbreviatureArray=currencyList.filter(el =>el.Cur_ID==currencyId)
         return AbreviatureArray[0].Cur_Abbreviation
    },

    getBoughtCurrencyPrice (amount:number,currencyId:string, currencyList: Array<any>) {

        const boughtCurrency=currencyList.filter(el =>el.Cur_ID==currencyId)
        const boughtCurrencyPrice = amount * boughtCurrency[0].Cur_OfficialRate
        return boughtCurrencyPrice
    }

}





