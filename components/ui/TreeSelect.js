import { TreeSelect } from 'antd';
import React from 'react'

const treeData = [
  {
    title: 'الحرم المكي',
    value: '0-0',
    children: [
      {
        title: 'بئر زمزم',
        value: '0-0-1',
      },
      {
        title: 'الكعبةالمشرفة',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'الحرم المدني',
    value: '0-1',
  },
  {
    title: 'مساجد',
    value: '0-2',
    children: [
        {
          title: 'مسجد قباء',
          value: '0-2-1',
        },
        {
          title: 'مسجد القبلتين ',
          value: '0-2-2',
        },
        {
          title: 'مسجد الرحمة ',
          value: '0-2-2',
        },
        {
          title: 'مسجد الميقات ',
          value: '0-1-2',
        },
      ],
  },
];

class Masraf extends React.Component {
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
        // style={{ width: '20%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="من فضلك اختر مصرف"
        onChange={this.onChange}
      />
    );
  }
}

export default Masraf