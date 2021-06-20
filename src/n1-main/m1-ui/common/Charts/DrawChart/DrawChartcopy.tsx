import React, {useRef, useEffect} from 'react'
import style from "../Charts.module.css";

const WIDTH = 400;
const HEIGHT = 150;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;

const DrawCharts = (props: any) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);



    const draw = (ctx: any, data: any) => {
        let i = 1
        for (i; i < data.length; i++) {
            ctx.beginPath();
            ctx.moveTo(...{...data}[i - 1]);
            ctx.lineTo(...{...data}[i]);
            ctx.stroke();
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            canvas.style.width = WIDTH + "px"
            canvas.style.background = "yellow"
            canvas.style.height = HEIGHT + "px"
            canvas.width = DPI_WIDTH
            canvas.height = DPI_HEIGHT

            const scaleX = 50;
            const scaleY = 50;

            //@ts-ignore
            // canvas.beginPath();
            //@ts-ignore
            // canvas.stroke();

            // const data = [[5, 5], [50, 100], [50, 150], [150, 150], [200, 200], [400, 200]]

            //     if (props.currencyChart.value) {
            //         //@ts-ignore
            //         const currencyChartValue = props.currencyChart.value.map(elem =>
            //
            //             [+elem.Date.slice(8, 10), elem.Cur_OfficialRate]
            //         )
            //         draw(context, currencyChartValue)
            //         console.log(currencyChartValue)
            //     }
            //
        }
    }, [draw])


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
