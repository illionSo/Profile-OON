import { Col, Row } from 'antd'
import React from 'react'
export const features= [
{id:'1',title:'Posted Opinions',path:'/',icon:'fa fa-rss'},
{id:2,title:'Saved',path:'/',icon:'fa fa-edit '},
{id:3,title:'Clapped',path:'/',icon:'fa fa-star'},
{id:4,title:'Followers',path:'/',icon:'fa fa-bars'},
{id:5,title:'Following',path:'/',icon:'fa fa-user'}

]
const FeaturesLeft = () => {
    return (
        <>
         <Row style={{marginTop:'2rem'}}>
             <Col xs={24} md={16} lg={12} xl={11}>
             <div style={{display:'flex',justifyContent:'space-around'}}>
             {features.map((feature)=>{
              return(
                 <p  style={{color:'#00A34B',fontWeight:'600'}}key={feature.id}><i   style={{marginRight:'4px',color:'black'}} className={feature.icon}></i>{feature.title}</p>      
         
              )
          })} 
          </div>
          <hr style={{marginLeft:'1rem'}}></hr>
        </Col>
        
         
         </Row>
         
            
        </>
    )
}

export default FeaturesLeft
