import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.nbrb.by/API/ExRates/',
});


export const myAPI = {
    getCurensysList(dateQuery:string) {
        const promise = instance.get(`Rates?ondate=${dateQuery}&periodicity=0`)
        return promise;
    },

    getChartData(currencyId:string, dateFrom:string, dateTill:string) {

        const promise = instance.get(`Rates/Dynamics/${currencyId}?startDate=${dateFrom}&endDate=${dateTill}`);

        // - adjustment API setting for dev
        // const promise = instance.get(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30`)
        // const promise = instance.get(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=2016-7-1&endDate=2016-7-30`)

        return promise;
    },

}







