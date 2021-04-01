import { Typography } from "antd";
const { Title } = Typography;

const HeaderTitle = ({value}) => {
   
  
    return (
    <Title level={5} style={dynamicTitle}>
      {value}
    </Title>
  );
};
const dynamicTitle = {
  position: "absolute",
  top: "18px",
  left: "290px",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "30px",
  letterSpacing: " 0.3px",
  color: " #252733",
};

export default HeaderTitle;
