import React,{useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav= ()=>{
    const auth = localStorage.getItem('user');
    const Navigate = useNavigate(); 
    const logout = ()=>{
        console.warn("apple");
        localStorage.clear();
        Navigate('/Signup');
    }
    
    return(
        <div className = "NavBar">
            <img className="logo" src="https://imgs.search.brave.com/AKtEk4buDIhmXNT69Eb7fiSSrZnm4zE3giFZEhvh2mI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vZThjMjlj/MWRhYjUxYzVmYTAw/ZmUyYzk0NGI0YTNm/NjExZGIxZDk2ZS00/MDJ4NDA5LnBuZz93/PTEwODAmcT03Mg" alt="" />
          { auth? <ul className = "Nav-ul">
                <li><Link to= "/about">About</Link></li>
                <li><Link to= "/">Products</Link></li>
                <li><Link to= "/add">Add Products</Link></li>
                {/* <li><Link to= "/update">Update Products</Link></li> */}
                <li><Link to= "/profile">Profile</Link></li>
                <li ><Link className="logout" onClick={logout} to= "/Signup">Logout ( {JSON.parse(auth).name})</Link></li>
                {/* <li>{!auth?<Link to= "/Signup">Signup</Link>:<Link onClick={logout} to= "/Signup">Logout</Link>}</li>
                <li><Link to= "/Login">Login</Link></li> */}
                {/* {auth ?<li><Link onClick={logout} to= "/Signup">Logout</Link></li>
                    :<>
                    <li><Link  to= "/Signup">Signup</Link></li>
                    <li><Link  to= "/Login">Login</Link></li>
                    </>} */}
            </ul>:
            <ul className = "Nav-ul nav-right">
                <li><Link  to= "/Signup">Signup</Link></li>
                <li><Link  to= "/Login">Login</Link></li>
            </ul> 
            }
        </div>
    )
}

export default Nav;
