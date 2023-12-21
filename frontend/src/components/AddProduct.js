import React from 'react';

const AddProduct = ()=>{
    
    const [name,setname] = React.useState('');
    const [Price,setPrice] = React.useState('');
    const [Category,setCategory] = React.useState('');
    const [Company,setCompany] = React.useState('');

    const [error,seterror] = React.useState(false);

    const addProd =async()=>{

        console.log(!name);
        if(!name || !Price || !Category || !Company ){
            seterror(true);
            return false;
        }

        console.log(name,Price,Category,Company);
         const userId = JSON.parse(localStorage.getItem('user'))._id;                       // fetch userId...
        //  console.log(userID)
        let result = await fetch("http://localhost:5000/add",
        {method:'post',
         body:JSON.stringify({name,Price,Category,userId,Company}),
         headers:{
            "content-type":"application/json"
         }
         
        });
        result = await result.json();
        console.log(result); 
    } 
    return (
        <div  className="page1" style= {{backgroundImage: `url("https://imgs.search.brave.com/HbbYW1CiYbhl1HU_2Bpsh9GxRNtfmen7fnFztbxco2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWNvaW5zLWNvcHkt/c3BhY2UtYmFja2dy/b3VuZF8yMy0yMTQ4/MzA1OTE5LmpwZz9z/aXplPTYyNiZleHQ9/anBn")`}}>
        <div className="product">
            <h1>Add Product</h1>
            <form className="log" action="">
            <input type="text" className="inputbox" placeholder="Enter product Name" value={name} onChange={(e)=>setname(e.target.value)} />
            {error && !name &&  <h2 className="q">Enter valid name</h2>}
            <input type="text" className="inputbox" placeholder="Enter product Price" onChange={(e)=>setPrice(e.target.value)} value={Price} />
            {error && !Price &&  <h2 className="q">Enter valid Price</h2>}

            <input type="text" className="inputbox" placeholder="Enter product Category" onChange={(e)=>setCategory(e.target.value)} value={Category}/>
            {error && !Category &&  <h2 className="q">Enter valid Category</h2>}

            <input type="text" className="inputbox"  placeholder="Enter product Company" onChange={(e)=>setCompany(e.target.value)} value={Company} />
            {error && !Company &&  <h2 className="q">Enter valid Company</h2>}

            <button onClick = {addProd} className="btnsign">Add product</button>
            </form>
        </div>
        </div>
    
    )
}

export default AddProduct;