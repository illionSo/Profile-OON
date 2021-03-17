import { Col, Row } from "antd"
import Opinionsleft from "./Opinionsleft"
import Opinionsright from "./Opinionsright"


const Opinions = () => {
    return (
        <>
          <Row justify="space-around" style={{marginTop:'2rem'}}>
           <Col xs={22} sm={23} md={13} lg={12} xl={11}>
           <Opinionsleft />
            </Col>
            <Col xs={22} sm={23} md={6} lg={6} xl={5}>
           <Opinionsright />
            </Col>
             </Row>  
        </>
    )
}

export default Opinions
