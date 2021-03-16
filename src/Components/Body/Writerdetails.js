import { Row, Col } from 'antd';
import WriterdetailsLeft from './WriterdetailsLeft';
import WriterdetailsRight from './WriterdetailsRight';
import WriterdetailsMiddle from './WriterdetailsMiddle';


const Writerdetails = () => {
    return (
        <>
        <div style={{marginTop:'2rem'}}>
          <Row justify="space-around">
          <Col xs={24} sm= {24} md= {19} lg={16} xl={10}>
          <WriterdetailsLeft userName='Sagar Pokhrel' />
          <Col xs={24} sm= {24} md= {24} lg={24} xl={24} >
          <p style={{fontWeight:'600',marginLeft:'5rem'}}>
      Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars Bio not more than 150 chars.</p>
          </Col>
         </Col>
           <Col xs={24} sm= {16} md= {6} xl={5}     >
          <WriterdetailsMiddle />
          </Col>
           <Col xs={24} sm= {24} md= {18} lg={20} xl={9} >
           <WriterdetailsRight />
           </Col>
        </Row>
        </div>    
        </>
    )
}

export default Writerdetails
