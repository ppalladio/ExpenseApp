import './ChartBar.scss';

function ChartBar(props) {
    let barHeight = '0%';

    if (props.max > 0) {
        barHeight = Math.round((props.value / props.maxValue) * 100 + '%');
    }
    return (
        <div class="chart-bar">
            <div class="chart-bar__inner">
                <div
                    class="chart-bar__fill"
                    style={{ height: barHeight }}
                ></div>
            </div>
            <div class="chart-bar__lable">{props.lable}</div>
        </div>
    );
}

export default ChartBar;
