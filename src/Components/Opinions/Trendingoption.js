import {  List , Avatar } from 'antd';



export const Trendingdetails = [
    {title:'coolman',imgSrc:'https://ca.slack-edge.com/TS23J1VCM-US49BEU78-0b533c089c94-512',path:''},
    {title:'coolman',imgSrc:'https://ca.slack-edge.com/TS23J1VCM-US49BEU78-0b533c089c94-512',path:''},
    {title:'coolman',imgSrc:'https://ca.slack-edge.com/TS23J1VCM-US49BEU78-0b533c089c94-512',path:''},
    {title:'coolman',imgSrc:'https://ca.slack-edge.com/TS23J1VCM-US49BEU78-0b533c089c94-512',path:''},
    {title:'coolman',imgSrc:'https://ca.slack-edge.com/TS23J1VCM-US49BEU78-0b533c089c94-512',path:''}
]


const Trendingoption = () => {
    return (
        <>
           <div style={{marginBottom:'3rem'}}>
           <h4 style={{textTransform:"upperCase"}}>Trending Topics</h4>
           <hr></hr>
           <List
              itemLayout="horizontal"
              dataSource={Trendingdetails}
              renderItem={item => (
                
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.imgSrc} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
           </div>

           
         </>
    )
}

export default Trendingoption
