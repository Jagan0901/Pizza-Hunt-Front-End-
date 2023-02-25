import { CustomizeButton } from "./CustomizeButton"


export function Deals(){

    const pizzaPic = {
        width:'30%',
        height:'10%',
      }

 return(
    <div className="deals-container">
    <div className="deals">
        <h1 style={{flexWrap:'wrap',fontSize:'250%',marginLeft: '20%'}}>Super Value Deal : Personal Pizzas starting at Rs 299</h1>
        <img style={pizzaPic} src="https://i.pinimg.com/236x/a4/20/ca/a420ca5cabb4357cd6c112aff0330e81.jpg" alt="Pizza-Pic"/>
    </div>
     <CustomizeButton/>
    </div>
)}