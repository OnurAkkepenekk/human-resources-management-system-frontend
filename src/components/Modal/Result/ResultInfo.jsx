
import { Result, Button } from 'antd';

const ResultInfo = ({status,title,subTitle}) => {
    return (
        <div>
            <Result
                status={status}
                title={title}
                subTitle={subTitle}
            />
        </div>
    )
};
export default ResultInfo;