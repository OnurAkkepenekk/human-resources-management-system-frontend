import { Select } from 'antd';

const Job = ({ jobs, setSelectPosition, ...props }) => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    setSelectPosition(value);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <div style={{ display: "inline-block", marginLeft: 16 }}>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select position"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {jobs.map(job => (
          <Option key={job.id} value={job.id}>{job.jobTitle}</Option>
        ))}
      </Select>
    </div>
  );
}

export default Job;