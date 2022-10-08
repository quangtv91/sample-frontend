import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import './CustomSelect.scss';
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined';

const { Option } = Select;

const CustomSelect = ({ placeholder, optionsList, ...props }) => (
  <Select
    placeholder={placeholder}
    className="custom-select"
    dropdownClassName="custom-dropdown-select"
    suffixIcon={<CaretDownOutlined />}
    {...props}
  >
    {Array.isArray(optionsList) && optionsList && optionsList.length > 0
      ? optionsList.map((item) => <Option key={item.value} value={item.value ? item.value : ''}>{item.label ? item.label : ''}</Option>)
      : ''}
  </Select>
);

CustomSelect.propTypes = {
  optionsList: PropTypes.array.isRequired,
};

export default CustomSelect;
