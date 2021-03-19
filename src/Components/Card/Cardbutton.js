import { Select } from 'antd';
const { Option } = Select;


const Cardbutton = () => {
   
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
      
    return (
        <>
  <Select defaultValue="No" style={{ width: 68 }} onChange={handleChange}>
      <Option value="Yes">Yes</Option>
      <Option value="No">No</Option>
      
      
    </Select>
    
        </>
    )
}

export default Cardbutton
