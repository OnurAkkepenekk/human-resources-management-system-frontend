
import { Select } from 'antd';

const City = ({ cities, setSelectCity, ...props }) => {


  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    setSelectCity(value);
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
    <div style={{ display: "inline-block" }}>
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
        {cities.map(city => (
          <Option key={city.id} value={city.cityId}>{city.cityName}</Option>
        ))}
      </Select>
    </div>
  );
}
export default City;