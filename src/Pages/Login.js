import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../API";

export function Login() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");  

  const [status,setStatus] = useState("");

  const navigate = useNavigate();
   

  const statusStyles = {
    textAlign: 'center',
    color : status === "Login Successfully" ? "green" : "red"
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "10%" }}>User Login</h2>
      <div className="login">
        <TextField
          id="email"
          label="Enter Email"
          variant="outlined"
          type="email"
          onChange={(event) => setMail(event.target.value)}
        />

        <TextField
          id="password"
          label="Enter Password"
          variant="outlined"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button 
         variant="contained" 
         color="success"
         type="submit"
         onClick={()=>{ 
          const user = {
            email:mail,
            password:password
          }
          fetch(`${API}/users/login`, {
            method :"POST",
            body   : JSON.stringify(user),
            headers: {"Content-Type" : "application/json", "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWM5MDk5MzQ5OGNlZjk4YzI0YWNjNCIsImlhdCI6MTY3NjQ1MTY1MH0.ZaQzhseCJyzJIggLR9VsWrz4JkCkNOYVtwWdWobz0b4"}
          })
            .then((data)=> data.json())

            .then((response)=>{
              if(response.message){
                setStatus(response.message)
                console.log(response.message)
                navigate("/user/dashboard");
              }else if(response.error){
                setStatus(response.error)
                console.log(response.error)
              }
            })

         }}
         >
          Login
        </Button>
        <h3 style={statusStyles}>{status}</h3>

        <h4 style={{ textAlign: "center" }}>
          Don't have an account? Create an account
          <Button
            variant="text"
            size="small"
            onClick={() => navigate("/user/signup")}
          >
            Click here
          </Button>
        </h4>
      </div>
    </div>
  );
}
