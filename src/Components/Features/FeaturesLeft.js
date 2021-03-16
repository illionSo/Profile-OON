import { Col, Row } from 'antd'
import React from 'react'
import FeaturesRight from './FeaturesRight'

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
         <Row style={{marginTop:'2.5rem'}} justify="space-around">
             <Col xs={24} md={16} lg={12} xl={11}>
             <div style={{display:'flex',justifyContent:'space-around'}}>
             {features.map((feature)=>{
              return(
                 <p  style={{color:'#00A34B',fontWeight:'600',cursor:'pointer'}}key={feature.id}>
                     <i  style={{marginRight:'8px',color:'black'}} className={feature.icon}></i>{feature.title}</p>      
         
              )
          })} 
          </div>
          <hr style={{marginLeft:'1rem'}}></hr>
        </Col>
        
         <Col xs={10} sm={10} md={5} lg={6} xl={6}>
         
         <FeaturesRight/>
         </Col>
         </Row>
         
            
        </>
    )
}

export default FeaturesLeft
