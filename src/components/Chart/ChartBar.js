import './ChartBar.scss';

function ChartBar(props) {
    let barHeight = '0%';

    if (props.maxValue > 0) {
        barHeight = Math.round((props.value / props.maxValue) *100 )+'%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barHeight }}
                ></div>
            </div>
            <div className="chart-bar__lable">{props.lable}</div>
        </div>
    );
}

export default ChartBar;
