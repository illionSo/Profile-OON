import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const Cardbutton = () => {
  const [style, setStyle] = useState(true);

  function handleChange(value) {
    setStyle(!style);
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Select
        className={style ? "red" : "green"}
        defaultValue="No"
        style={{ width: 68 }}
        onChange={handleChange}
      >
        <Option value="Yes" style={{ color: "green" }}>
          {" "}
          Yes
        </Option>
        <Option value="No" style={{ color: "red" }}>
          No
        </Option>
      </Select>
    </>
  );
};

export default Cardbutton;
