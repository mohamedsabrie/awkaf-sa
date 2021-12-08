import { TreeSelect } from 'antd';
import React from 'react'

const treeData = [
  
  {
    title: ' موسم رمضان',
    value: '0-1',
  },
  {
    title: ' موسم الحج',
    value: '0-2',
  },
  
  
];

class Time extends React.Component {
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
        placeholder="اختر موسم"
        onChange={this.onChange}
      />
    );
  }
}

export default Time