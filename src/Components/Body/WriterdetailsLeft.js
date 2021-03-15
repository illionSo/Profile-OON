import PropTypes from 'prop-types';
import { Avatar  } from 'antd'
export const detailsLeft = [
     {userDetails:'Creative Writer  and Entrepreneur',id:1},
     {userDetails:'Kathmandu,Nepal',id:2},
     {userDetails:'Poltics,Education,Technology',id:3}
]

const WriterdetailsLeft = ({userName}) => {
    return (
        <div style={{padding:'2rem'}}>
        <div className='writerdetailsStyle'>
              <div>
              <Avatar 
               style={{width:'124px',height:'121px'}}
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
           />
           </div>
            <div style={{marginLeft:'1rem'}}>
           <h2 style={{color:'#00A34B',fontWeight:'600'}}>{userName}</h2>
                {detailsLeft.map((detail)=>{
                    return(
                     <h4 key={detail.id} style={{fontWeight:'600'}}>{detail.userDetails}</h4>
                    )
                })}
         </div>
        </div>
     </div>
     )
}
WriterdetailsLeft.propTypes = {
    userName: PropTypes.string.isRequired,
  };
export default WriterdetailsLeft
