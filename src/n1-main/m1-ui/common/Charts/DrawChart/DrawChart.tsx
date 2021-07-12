import React, {useRef, useEffect} from 'react'
import style from "../Charts.module.css";
import {currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {currencyChartStateType} from "../../../../m2-bll/currencyChartReducer";


export type PropsType = {
    currencyChart: currencyChartStateType
    currencyList: currencyListStateType
    currencyId: string
}


const DrawCharts = (props: PropsType) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const currencyRateValue = props.currencyChart.value.map(elem =>
        [elem.Cur_OfficialRate]
    )
    const maxDataCurrencyRate: any = currencyRateValue.sort()[currencyRateValue.length - 1]

    const WIDTH = 400;
    const HEIGHT = 200;
    const gridScaleX = 20;
    const gridScaleY = 20;


    const chartDayTime = 31;
    const chartScaleX = WIDTH / chartDayTime;
    const chartScaleY = HEIGHT / maxDataCurrencyRate;

    const drawChart = (ctx: any, data: any) => {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "blue";

        let i = 1;
        for (i; i < data.length; i++) {
            ctx.beginPath();
            ctx.moveTo(...{...data}[i - 1]);
            ctx.lineTo(...{...data}[i]);
            ctx.stroke();
        }

        const currencyAbbreviation = props.currencyList[0].list.filter(elem => elem.Cur_ID === +props.currencyId)

        if (currencyAbbreviation[0]) {
            ctx.fillStyle = "#00F";
            ctx.strokeStyle = "red";
            ctx.font = "italic 20pt Arial";
            ctx.fillText(`${currencyAbbreviation[0].Cur_Abbreviation}`, 200, 30);
        }
    }

    //-------------draw chart grid-------------------
    const drawGrid = (context: any) => {

        context.beginPath();
        for (let i = 0; i < WIDTH; i += gridScaleX) {
            context.moveTo(i, 0);
            context.lineTo(i, HEIGHT);
            context.font = "5pt Arial";
            context.fillText(`${Math.round(i / chartScaleX)}`, i, HEIGHT);
        }

        for (let i = 0; i < HEIGHT; i += gridScaleY) {
            context.moveTo(0, i);
            context.lineTo(WIDTH, i);
            context.font = "5pt Arial";
            context.fillText(`${(maxDataCurrencyRate - i / chartScaleY).toFixed(1)}`, 0, i);
        }
        context!.stroke();
    }
//---------------------------------------------------------------------------

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')

            canvas.width = WIDTH;
            canvas.height = HEIGHT;
            canvas.style.background = "lightgray"

            // canvas.style.width = WIDTH + "px"
            // canvas.style.height = HEIGHT + "px"


            //-----make array data for chart ( time <-> rate)------
            const currencyChartValue = props.currencyChart.value.map(elem =>
                [+elem.Date.slice(8, 10) * chartScaleX, HEIGHT - elem.Cur_OfficialRate * chartScaleY]
            )


            //-----------draw charts----------------------------------
            drawChart(context, currencyChartValue)

            //-----draw grid for charts-------------------------------
            context!.strokeStyle = "white"
            context!.lineWidth = 0.3
            context!.globalAlpha = 1
            drawGrid(context)
        }
    }, [drawChart])


    return (<div className={style.chart_container}>
            <span>chart for period {props.currencyChart.dateFrom} - {props.currencyChart.dateTill}</span>
            <br/>
            <canvas ref={canvasRef} {...props}
                    {...props.currencyChart.value}
            />
        </div>
    )
}

export default DrawCharts
