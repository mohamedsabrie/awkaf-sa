import { TreeSelect } from 'antd';
import React from 'react'

const treeData = [
  
  {
    title: ' مكة',
    value: '0-1',
  },
  {
    title: ' المدينة',
    value: '0-2',
  },
  {
    title: ' الطائف',
    value: '0-3',
  },
  {
    title: ' الرياض',
    value: '0-4',
  },
  
];

class Area extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '20%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="اختر منطقة"
        onChange={this.onChange}
      />
    );
  }
}

export default Area