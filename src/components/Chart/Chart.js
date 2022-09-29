import './Chart.scss';
import ChartBar from './ChartBar';
function Chart(props) {
    const dataPointsValue = props.dataPoints.map(v => v.value);
    const maximumValue = Math.max(...dataPointsValue)
    return (
        <div class="chart">
            {props.datapoints.map((data) => (
                <ChartBar
                    value={data.value}
                    maxValue={maximumValue}
                    lable={data.lable}
                />
            ))}
        </div>
    );
}
export default Chart;
