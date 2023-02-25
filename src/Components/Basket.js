import  Button  from '@mui/material/Button';

export function Basket(){

  return(
    <div className='basket'>
    <h1 style={{ paddingTop:'10%',marginLeft:'20%'}}>Your Basket</h1>
    <Button style={{ width:'75%', marginBottom:'4%', height:'7%', right:'-5%'}} variant="contained" color="success">
     Checkout
   </Button>
  </div>
  )  
}