import { Basket } from './Basket';




export function NavBar() {

  


  return(
    <div>
    <div className="nav">
    <div>
   <img className="logo-pic" src="https://i.pinimg.com/236x/c6/69/54/c669549285684730e31b30b36556bc03.jpg" alt="logo"/>
   <img className="logo-name" src="https://fontmeme.com/permalink/230213/4ac1d313d2b06b0dc3355b825ab46c0b.png" alt="logo"/>           
    </div>
   </div>
       <Basket/>
   </div>
  )
}
