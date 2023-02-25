// import './App.css';

import { SignIn } from "../Components/SignIn";

export function Home() {
  return (
    <div>
        <div className="nav">
          <div>
         <img className="logo-pic" src="https://i.pinimg.com/236x/c6/69/54/c669549285684730e31b30b36556bc03.jpg" alt="logo"/>
         <img className="logo-name" src="https://fontmeme.com/permalink/230213/4ac1d313d2b06b0dc3355b825ab46c0b.png" alt="logo"/>           
          </div>
         <SignIn/>
         </div>
        <img className="home-image" src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-md.22dee481bc08406f32b55c3db87ca7fa.jpg" alt="Valentine's Day Special"/>
    </div>
  )
}
