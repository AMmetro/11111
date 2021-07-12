import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://www.nbrb.by/api/exrates/',

})


export const myAPI = {
    getCurensysList(dateQuery:Date) {
        const promise = instance.get<any>(`rates?ondate=${dateQuery}&periodicity=0`)
        return promise;
    },

    getChartData(currencyId:string, dateFrom:string, dateTill:string) {

        // const promise = instance.get<any>(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30`)
        // const promise = instance.get<any>(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=2016-7-1&endDate=2016-7-30`)
        // console.log(promise)

        const promise = instance.get<any>(`Rates/Dynamics/${currencyId}?startDate=${dateFrom}&endDate=${dateTill}`)

        return promise;
    },

}







