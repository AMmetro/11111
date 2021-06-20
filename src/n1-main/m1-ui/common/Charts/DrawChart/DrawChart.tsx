import React, {useRef, useEffect} from 'react'
import style from "../Charts.module.css";

const WIDTH = 400;
const HEIGHT = 200;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;

const DrawCharts = (props: any) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);

    const drawChart = (ctx: any, data: any) => {
        let i = 1
             ctx!.lineWidth = 3
             ctx!.strokeStyle = "yellow"
        for (i; i < data.length; i++) {
            ctx.beginPath();
            ctx.moveTo(...{...data}[i - 1]);
            ctx.lineTo(...{...data}[i]);
            ctx.stroke();
        }

    //@ts-ignore
    const currencyAbbreviation = props.currencyList.list.filter(elem => elem.Cur_ID === +props.currencyId )
        if (currencyAbbreviation[0]){
        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "italic 20pt Arial";
        ctx.fillText(`${currencyAbbreviation[0].Cur_Abbreviation}`, 200, 30);
        }
    }

    const drawGrid = (context:any) => {

        const scaleX = 20;
        const scaleY = 50;
        context!.beginPath();
        for (let i = 0; i < DPI_WIDTH; i = i + scaleX) {
            context!.moveTo(i, 0)
            context!.lineTo(i, 140)

            context!.font = "5pt Arial";
            context!.fillText(`${i}`, i, HEIGHT-50);
        }

        for (let i = 0; i < DPI_HEIGHT; i = i + scaleX) {
            context!.moveTo(0, i)
            context!.lineTo(DPI_HEIGHT, i)

            context!.font = "5pt Arial";
            context!.fillText(`${i}`, 0, i);
        }
        context!.stroke();

    }
//---------------------------------------------------------------------------

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            canvas.style.width = WIDTH + "px"
            canvas.style.background = "lightgray"
            canvas.style.height = HEIGHT + "px"

//---------------------------calc data for Chart----------------------------------------
           if (props.currencyChart.value) {
             //@ts-ignore
             const currencyChartValue = props.currencyChart.value.map(elem =>
               [+elem.Date.slice(8, 10)*10, elem.Cur_OfficialRate*12]
                )
               drawChart(context, currencyChartValue)
            }
//------------------------------------------------------------------------------
            context!.strokeStyle = "white"
            context!.lineWidth = 0.1
            context!.globalAlpha = 0.5
            drawGrid(context)
        }
    }, [drawChart])


    return (<div className={style.chart_container}>
            <span>chart for period {props.currencyChart.dateFrom} - {props.currencyChart.dateTill}</span>
            <br/>
            <canvas ref={canvasRef} {...props}
                    {...props.currencyChartValue}
            />
        </div>
    )
}

export default DrawCharts
