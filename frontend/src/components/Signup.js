import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Signup = ()=>{
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    const Navigate = useNavigate();  //used to navigate from one page to another...

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            Navigate('/');
        }
    })
    const collectData = async ()=>{
        // console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        if(result){
            // Navigate to the product main page...
            localStorage.setItem("user",JSON.stringify(result));
            Navigate('/');
        }
        else{
            alert("not allowed");
        }
    }
    return(
        <div  className="page1" style= {{backgroundImage: `url("https://imgs.search.brave.com/HbbYW1CiYbhl1HU_2Bpsh9GxRNtfmen7fnFztbxco2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWNvaW5zLWNvcHkt/c3BhY2UtYmFja2dy/b3VuZF8yMy0yMTQ4/MzA1OTE5LmpwZz9z/aXplPTYyNiZleHQ9/anBn")`}}>

        <div  className='reg'>
            <h1>Register</h1>
            {/* <img src="https://imgs.search.brave.com/HbbYW1CiYbhl1HU_2Bpsh9GxRNtfmen7fnFztbxco2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWNvaW5zLWNvcHkt/c3BhY2UtYmFja2dy/b3VuZF8yMy0yMTQ4/MzA1OTE5LmpwZz9z/aXplPTYyNiZleHQ9/anBn" alt="" /> */}
            <form className="log" action="">
            <input className = "inputbox" type="text" value = {name} onChange={(e)=>setname(e.target.value)} placeholder = 'Enter Name'/>
            <input className = "inputbox" type="text" value = {email} onChange={(e)=>setemail(e.target.value)} placeholder = 'Enter Email'/>
            <input className = "inputbox" type="password" value = {password} onChange={(e)=>setpassword(e.target.value)} placeholder = 'Enter Password'/>
            <button className = "btnsign" onClick={collectData} type = 'button'>Sign up</button>
            </form>
        </div>
        </div>
    )
}

export default Signup;