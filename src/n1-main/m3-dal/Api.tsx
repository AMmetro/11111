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
        const promise = instance.get<any>(`Rates/Dynamics/${currencyId}?startDate=${dateFrom}&endDate=${dateTill}`)
        return promise;
    },

}







