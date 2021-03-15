import { Row, Col } from 'antd';
import WriterdetailsLeft from './WriterdetailsLeft';
import WriterdetailsRight from './WriterdetailsRight';
import WriterdetailsMiddle from './WriterdetailsMiddle';

const Writerdetails = () => {
    return (
        <>
        <div style={{marginTop:'2rem'}}>
          <Row justify="space-around">
          <Col xs={24} xl={10} >
          <WriterdetailsLeft userName='Sagar Pokhrel' />
          </Col>
          <Col xs={24} xl={5} >
          <WriterdetailsMiddle />
          </Col>
          <Col xs={24} xl={9} >
        <WriterdetailsRight />
        </Col>
         </Row>
        </div>    
        </>
    )
}

export default Writerdetails
