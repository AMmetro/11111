import React, {useRef, useEffect} from 'react'
import style from "../Charts.module.css";
import {currencyListStateType} from "../../../../bll/currencyListReducer";
import {currencyChartStateType} from "../../../../bll/currencyChartReducer";


export type PropsType = {
    currencyChart: currencyChartStateType
    currencyList: currencyListStateType
    currencyId: string
}

type CurrencyRateValue=number[]


const DrawCharts = (props: PropsType) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const currencyRateValue:Array<CurrencyRateValue> = props.currencyChart.value.map(elem =>[elem.Cur_OfficialRate])

    const maxDataCurrencyRate: number = currencyRateValue.sort()[currencyRateValue.length - 1][0]


        const WIDTH = 400;
        const HEIGHT = 200;
        const gridScaleX = 25;
        const gridScaleY = 25;

        const chartDayTime = 30;  //day in month
        const chartScaleX = WIDTH / chartDayTime;
        const chartScaleY = (HEIGHT / maxDataCurrencyRate);


        const drawChart = (ctx:CanvasRenderingContext2D | null, chartData: Array<[number,number]>) => {
            if (ctx){
                ctx.clearRect(0, 0, WIDTH, HEIGHT);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "blue";

                let i = 1;
                for (i; i < chartData.length; i++) {
                    ctx.beginPath();
                    ctx.moveTo( ... ([...chartData][i - 1]) );
                    ctx.lineTo( ... ([...chartData][i]) );
                    ctx.stroke();
                }
            }

            const currencyAbbreviation = props.currencyList[0].list.filter(elem => elem.Cur_ID === +props.currencyId)

            if (currencyAbbreviation[0]) {
                ctx!.fillStyle = "blue";
                ctx!.font = "italic 20pt Arial";
                ctx!.fillText(`${currencyAbbreviation[0].Cur_Abbreviation}`, 300, 30);
            }
        }

//-------------draw chart grid-------------------
        const drawGrid = (context: CanvasRenderingContext2D | null) => {
            if (context) {
                context.beginPath();
                for (let currentWIDTH = 0; currentWIDTH < WIDTH; currentWIDTH += gridScaleX) {
                    context.moveTo(currentWIDTH, 0);
                    context.lineTo(currentWIDTH, HEIGHT);
                    context.font = "7pt Arial";
                    context.fillText(`${Math.round(currentWIDTH / chartScaleX)}`, currentWIDTH, HEIGHT);
                }

                for (let currentHEIGHT = 0; currentHEIGHT < HEIGHT; currentHEIGHT += gridScaleY) {
                    context.moveTo(0, currentHEIGHT);
                    context.lineTo(WIDTH, currentHEIGHT);
                    context.font = "7pt Arial";
                    context.fillText(`${(maxDataCurrencyRate - currentHEIGHT / (chartScaleY * 10)) // 10 - increase scale 
                        .toFixed(2)}`, 0, currentHEIGHT);
                }
                context!.stroke();
            }
        }
//---------------------------------------------------------------------------
        useEffect(() => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');

                canvas.width = WIDTH;
                canvas.height = HEIGHT;
                canvas.style.background = "lightgray";

//----------------Extract data for chart ( time & rate) ------------------
                const currencyChartValue:Array<[number,number]> = props.currencyChart.value.map(elem =>
                    [+elem.Date.slice(8, 10) * chartScaleX, HEIGHT - elem.Cur_OfficialRate * chartScaleY * 10 / 12] //  10/12 - value chart offset
                );

//--------------------------call draw charts function----------------------------------
                drawChart(context, currencyChartValue);

//--------------------- call draw grid for charts-------------------------------
                context!.strokeStyle = "white";
                context!.lineWidth = 0.3;
                context!.globalAlpha = 1;
                drawGrid(context);
            }
        }, [drawChart]);

// --------------------------------------------------------------------------

    return (
        <div className={style.chart_container}>
            <span>chart for period {props.currencyChart.dateFrom} - {props.currencyChart.dateTill}</span>
            <br/>
            <canvas ref={canvasRef} {...props}
                    {...props.currencyChart.value}
            />
        </div>
    )
}

export default DrawCharts
