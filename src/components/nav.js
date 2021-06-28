import Classes from '../App.module.css'
const Nav = ()=>{
    
   return(
    <div className={Classes.navBar}>
        <ul> 
            <li className={Classes.comp}><a href="/" className={Classes.aa}>home</a></li>
            <li className={Classes.comp}><a href="/orders" className={Classes.aa}>Orders</a></li>
            <li className={Classes.comp}><a href="/table" className={Classes.aa}>Table</a></li>
            

        </ul>
    </div>
   )

}

export default Nav