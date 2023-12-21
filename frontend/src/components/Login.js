import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const Login = ()=>{
    const [email,setemail] = React.useState('');
    const [password,setpassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])

    const handleLogin= async()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',
        {method:'post',
         body:JSON.stringify({email,password}),
         headers:{
            'content-type':"application/json"
         }
        })
        result = await result.json();
        console.warn(result);
        if(result.name ){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }else{
            alert("please enter correct details")
        }

    }
    return(
        <div  className="page2" style= {{backgroundImage: `url("https://imgs.search.brave.com/HbbYW1CiYbhl1HU_2Bpsh9GxRNtfmen7fnFztbxco2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWNvaW5zLWNvcHkt/c3BhY2UtYmFja2dy/b3VuZF8yMy0yMTQ4/MzA1OTE5LmpwZz9z/aXplPTYyNiZleHQ9/anBn")`}}>
        <div className="login">

            <h1>login page</h1>
            <form className="log" action="">
            <input type="text" className = "inputbox" onChange={(e)=>setemail(e.target.value)} placeholder="Enter email" value = {email}/>
            <input type="password" className = "inputbox" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password" value={password}/>
            <button className = "btnsign"onClick={handleLogin} type = 'button'>Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login;
