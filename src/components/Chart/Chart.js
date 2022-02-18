import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const filteredMaxValue = props.dataPoints.map((dataPoint) => { return dataPoint.value });
    const maxVal = Math.max(...filteredMaxValue);
    return (
        <div className="chart">
            {
                props.dataPoints.map(expense => <ChartBar key={expense.label} maxValue={maxVal} label={expense.label} value={expense.value} />)
            }
        </div>
    )
}
export default Chart;