import './Chart.scss';
import ChartBar from './ChartBar';
function Chart(props) {
    const dataPointsValue = props.dataPoints.map(v => v.value);
    const maximumValue = Math.max(...dataPointsValue)
    return (
        <div className="chart">
            {props.dataPoints.map((data) => (
                <ChartBar
                    value={data.value}
                    maxValue={maximumValue}
                    lable={data.lable}
                    key={data.lable}
                />
            ))}
        </div>
    );
}
export default Chart;
