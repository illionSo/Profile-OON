export const detailsRight= [
    {id:'1',icon:'fas fa-user-edit',des:'Professional Contant Writer'},
    {id:'2',icon:'fas fa-university',des:'Last Degree:Bachelor in Computer Science'},
    {id:'3',icon:'far fa-star',des:'OON Level:'}
]

const WriterdetailsRight = () => {
    return (
        <div style={{padding:'2rem'}}>
            <h3 style={{fontWeight:'600'}}>Writer's Highlight</h3>
            <hr></hr>
         {detailsRight.map((detail)=> {
             return (
                 <div style={{display:'flex'}}>
                <i className={detail.icon}></i>
                 <h4 style={{marginLeft:'1rem',fontWeight:'600'}}>{detail.des}</h4>
                 </div>
             )
         })}
        </div>
    )
}

export default WriterdetailsRight
