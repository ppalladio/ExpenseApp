import './Chart.scss';
import ChartBar from './ChartBar';
function Chart(props) {
    return (
        <div class="chart">
            {props.datapoints.map((data) => (
                <ChartBar
                    value={data.value}
                    maxValue={null}
                    lable={data.lable}
                />
            ))}
        </div>
    );
}
export default Chart;
