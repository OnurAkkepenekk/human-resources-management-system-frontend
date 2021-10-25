import { Select } from 'antd';

const WorkTypeFilter = ({ workTypes, setSelecWorkType, ...props }) => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    setSelecWorkType(value);
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
        placeholder="Select a city"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {workTypes.map(workType => (
          <Option key={workType.workTypeId} value={workType.workTypeId}>{workType.workTypeName}</Option>
        ))}
      </Select>
    </div>
  );
}
export default WorkTypeFilter;