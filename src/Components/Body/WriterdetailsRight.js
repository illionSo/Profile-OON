export const detailsRight= [
    {id:'1',icon:'',des:'Professional Contant Writer'},
    {id:'2',icon:'',des:'Last Degree:Bachelor in Computer Science'},
    {id:'3',icon:'',des:'OON Level:'}
]

const WriterdetailsRight = () => {
    return (
        <div style={{padding:'3rem'}}>
            <h3>Writer's Highlight</h3>
            <hr></hr>
         {detailsRight.map((detail)=> {
             return (
                 <div style={{display:'flex'}}>
                 <p>{detail.id}</p>
                 <h4 style={{marginLeft:'1rem',fontWeight:'600'}}>{detail.des}</h4>
                 </div>
             )
         })}
        </div>
    )
}

export default WriterdetailsRight
