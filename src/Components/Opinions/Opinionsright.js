import Navbutton from "../Header/Navbutton"
import Trendingoption from "./Trendingoption"
import ButtonMenu from "./BottomMenu"
export const List =[
  {
  id:'1',
  title:'Agriculture',
  path:'/'
  },
  {
    id:'2',
  title:'Poltics',
  path:'/'
   },
  {
    id:'3',
    title:'Tourism',
   path:'/'
  },
  {id:'4',
  title:'Information and Technology',
  path:'/'
  },
  {id:'5',
  title:'Entertainment',
  path:'/'  
  },
  {id:'6',
  title:'Business',
  path:'/'
  },
  {id:'7',
  title:'Economics',
  path:'/'
  },
  {id:'8',
  title:'Sports',
  path:'/'
  },
  {id:'9',
  title:'Experiences',
  path:'/'
  }
]

const Opinionsright = () => {
    return (
        <>
          <h4 style={{textTransform:"upperCase"}}>Reader's Topic</h4>
          <hr></hr> 
          {List.map((li)=>{
            return(
            <h4 key={li.id} style={{fontWeight:'600'}}>{li.title}</h4> 
            )
          })}
          <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
            <h4 style={{textTransform:"upperCase"}}>Become an Editor</h4>
            <hr></hr>
            <Navbutton value='JOIN US' />
            </div>
            <Trendingoption  style={{height:'40vh'}}/>
            <hr></hr>
            <ButtonMenu />
        </>
    )
}

export default Opinionsright
