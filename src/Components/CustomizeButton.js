import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Basket } from './Basket';



export function CustomizeButton() {

    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');
    const [ages, setAges] = useState('');
  
    const handleChange = (event) => {
      setAge(String(event.target.value) || '');
    };

    const handleChanges = (event) => {
        setAges(Number(event.target.value) || '');
      };    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    };    

  return(
    <div>
    <Button color='error' style={{marginLeft:'45%'}} onClick={handleClickOpen}>Customize your Pizza</Button>
    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogTitle>Customize</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Pizza Base</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={age}
              onChange={handleChange}
              input={<OutlinedInput label="Pizza Base" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Chilly'}>Chilly</MenuItem>
              <MenuItem value={'Tomato'}>Tomato</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Sauce</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={ages}
              onChange={handleChanges}
              input={<OutlinedInput label="Sauce" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>          
        </Box>
      </DialogContent>     
      <DialogActions>
        <Button color='error' variant="contained" onClick={handleClose}>Cancel</Button>
        <Button color='success' variant="contained" onClick={handleClose}>Add To Basket</Button>
      </DialogActions>
    </Dialog>
    
  </div>
  )  
}