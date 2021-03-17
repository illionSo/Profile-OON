import { Card } from "antd"

export const Carddetails =[
    {
        id:'1',
        path:'',
        title:'Am i getting married ?',
        imgSrc:'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        detailsCard:'The href attribute requires a valid value to be accessible Provide a valid-the href attribute '
    },
    {
        id:'2',
        path:'',
        title:'Am i getting married ?',
        imgSrc:'https://images.unsplash.com/photo-1567530331069-630c6a3926f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=753&q=80',
        detailsCard:'The href attribute requires a valid value to be accessible Provide a valid-the href attribute '
},
    {
        id:'3',
        path:'',
        title:'Am i getting married ?',
        imgSrc:'https://images.unsplash.com/photo-1517504544462-e6b28c1abb8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80',
        detailsCard:'The href attribute requires a valid value to be accessible Provide a valid-the href attribute '
},
    {
        id:'4',
        path:'',
        title:'Am i getting married ?',
        imgSrc:'https://images.unsplash.com/photo-1501626479157-51940c6ad60d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        detailsCard:'The href attribute requires a valid value to be accessible Provide a valid-the href attribute '
},
    {
        id:'5',
        path:'',
        title:'Am i getting married ?',
        imgSrc:'https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        detailsCard:'The href attribute requires a valid value to be accessible Provide a valid-the href attribute '
}
]

const { Meta } = Card;
const Opinionsleft = () => {
    return (
        <>
         <h4>13 Opinion Posted</h4>
         <hr></hr>   
         {Carddetails.map((detail)=>{
             return (
                <Card key={detail.id}
                hoverable
                style={{ width: '100%',marginBottom:'1rem',marginTop:'1rem' }}
                cover={<img alt="example" src={detail.imgSrc} style={{height:'40vh',width:'100%'}}/>}
              >
                <Meta title={detail.title} description={detail.detailsCard} style={{fontWeight:'600'}} />
              </Card>
             )
         })}
</>
        
    )
}

export default Opinionsleft
