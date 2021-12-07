import { Dropdown, Menu, Button, message } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function DropDown({title, option1, option2, option3}) {

    function handleMenuClick(e) {
       
      }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
            {option1}
          </Menu.Item>
          <Menu.Item key="2" >
          {option2}
          </Menu.Item>
          <Menu.Item key="3" >
          {option3}
          </Menu.Item>
        </Menu>
      );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button>
          <DownOutlined />  {title} 
        </Button>
      </Dropdown>
    </div>
  );
}

export default DropDown;
