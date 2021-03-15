import { Menu,Image } from 'antd';

import Navbutton from './Navbutton';
import Navicon from './Navicon';
import Navuserimg from './Navuserimg';

 const Navbar = () => {
   return (
        <>                                         
      <Menu  mode="horizontal">
        <Menu.Item  style={{marginLeft:'4rem'}} >
         <a href='#'>
          <Image src='../opinion-logo.png' alt='opinionLogo' 
          style={{width:'80px',height:'74px',padding: '15px 0px 3px 6px'}}/>
          </a>
     
        </Menu.Item>
        <div style={{float:'right'}}>
          <div style={{marginTop:'1.5rem',justifyContent:'space-between'}}>
          <Navbutton value='Post Opinion' />
          <Navicon />
          <Navuserimg />
           </div>
          </div>
          </Menu>   
        </>
    )
}
export default Navbar
