import  Button  from '@mui/material/Button';

export function Basket(){

  return(
    <div className='basket'>
    <h1>Your Basket</h1>
    <Button variant="contained" color="success">
     Checkout
   </Button>
  </div>
  )  
}