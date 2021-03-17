

export const Menuitem = [
    {title:'About',path:''},
    {title:'Policies',path:''},
    {title:'FAQS',path:''},
    {title:'Write',path:''}
]

const BottomMenu = () => {
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        {Menuitem.map((menu)=> {
            return (
                <h4 >{menu.title}</h4>
            )
        })}     
         </div >
       <div style={{marginTop:'1rem'}}>
       <p>Copyright © 2020 Opinion of Nepal
Powered by illionSo</p>
</div>
        </>
    )
}

export default BottomMenu
