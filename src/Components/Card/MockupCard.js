


import { Typography,Card,Button,Space,Statistic } from 'antd';
const { Title, Paragraph, Text } = Typography;
 export const cardDetails= [
     {
    textTitle:'politics', 
    title:'Covid-19 and Human Nature Interference.',
des:'Be the first to know about Carl Reiner’s new releases, sales, exclusive offers, appearances and special events.',
     name:'Luis Enrique ',
     date:'March 14,2021',
    }
 ]

const MockupCard = () => {
    return (
        <>
 
 
 
 <div style={{marginLeft:'5rem'}}>
 <div className="site-card-border-less-wrapper">
    <Card  bordered={false} style={{ width: 350 }} hoverable>
    {cardDetails.map(detail=>{
        return(
            <>
            <Text code >{detail.textTitle}</Text>
            <Title level={4}>{detail.title}</Title>
            <Paragraph>{detail.des}</Paragraph>
            <Title level={5}>{detail.name}</Title>
            <Space>
            
            <Statistic value={detail.date} />
            <div>
               <Space>
               <Title level={5} style={{fontWeight:'600',marginLeft:'2.5rem'}}>Approved:</Title>
               <Button size='small'  > No </Button>
               </Space>
            </div>
            </Space>
           
            <Button size='medium' type='primary' style={{marginTop:'1rem'}}>Take This Job </Button>

        </>
        )
    })}
    
    
    </Card>
  </div>
  </div>
 
 
 
 
        </>
    )
}

export default MockupCard;
