import { Typography, Card, Space, Statistic, Row, Col } from "antd";
import Cardbutton from "./Cardbutton";
import Popup from "./Popup";
const { Title, Paragraph, Text } = Typography;

export const cardDetails = [
  {
    textTitle: "politics",
    title: "Covid-19 and Human Nature Interference.",
    des:
      "Be the first to know about Carl Reiner’s new releases, sales, exclusive offers, appearances and special events.",
    name: "Luis Enrique ",
    date: "March 14,2021",
  },
];

const MockupCard = () => {
  return (
    <>
      <div style={{ marginLeft: "5rem" }}>
        <div className="site-card-border-less-wrapper">
          <div style={{ marginLeft: "5rem" }}></div>
          <Card bordered={false} style={{ width: 350 }} hoverable>
            {cardDetails.map(detail => {
              return (
                <>
                  <Text code>{detail.textTitle}</Text>
                  <Title level={4}>{detail.title}</Title>
                  <Paragraph>{detail.des}</Paragraph>
                  <Title level={5} style={{ color: "rgb(148 140 140)" }}>
                    {detail.name}
                  </Title>

                  <Row>
                    <Col xl={9}>
                      <Statistic value={detail.date} />
                    </Col>
                    <Col xl={14}>
                      <div className="styleSpace">
                        <Space>
                          <Title
                            level={5}
                            style={{ fontWeight: "600", marginLeft: "1.5rem" }}
                          >
                            Approved:
                          </Title>
                          <Cardbutton />
                        </Space>
                      </div>
                    </Col>
                  </Row>
                  <Popup />
                </>
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};

export default MockupCard;
