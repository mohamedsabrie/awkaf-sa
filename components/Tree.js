import { TreeSelect } from 'antd';
import React, {useEffect} from 'react'
import { ReactSVG } from 'react-svg'


const  Tree  = ({handleChange, value,placeholder, data})=> {
  
  

  
    return (
      <>

      <TreeSelect
        // style={{ width: '20%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={data}
        placeholder={placeholder}
        onChange={handleChange}
        treeDefaultExpandAll
        dropdownStyle	 = {{direction: "rtl"}}
        multiple	={true}
        treeCheckable= {true}



      />
      </>
    );
  }


export default Tree