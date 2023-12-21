import React from 'react';
import {useParams} from 'react-router-dom'
const UpdateProduct = ()=>{
    
    const [name,setname] = React.useState('');
    const [Price,setPrice] = React.useState('');
    const [Category,setCategory] = React.useState('');
    const [Company,setCompany] = React.useState('');
    const params = useParams();

    React.useEffect(() => {
    //   console.warn(params);
      getProductdeatails();
    }, [])
    
    const getProductdeatails = async ()=>{
        let result = await fetch(`http://localhost:5000/Product/${params.id}`)

        result = await result.json();
        // console.log(result);
        setname(result.name);
        setPrice(result.Price);
        setCategory(result.Category);
        setCompany(result.Company);

            
        
    }

    const UpdateProd =async()=>{
        console.log(name,Price,Category,Company);
        let result = fetch(`http://localhost:5000/Product/${params.id}`,
        {
            method:"Put",
            body:JSON.stringify({name,Price,Category,Company}),
            headers:{
                'Content-Type':"application/json"
            }

        });
        // result = await result.json();
        console.log(result);

        
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" className="inputbox" placeholder="Enter product Name" value={name} onChange={(e)=>setname(e.target.value)}  />
            <input type="text" className="inputbox" placeholder="Enter product Price" onChange={(e)=>setPrice(e.target.value)} value={Price} />

            <input type="text" className="inputbox" placeholder="Enter product Category" onChange={(e)=>setCategory(e.target.value)} value={Category}/>

            <input type="text" className="inputbox"  placeholder="Enter product Company" onChange={(e)=>setCompany(e.target.value)} value={Company} />

            <button onClick = {UpdateProd} className="btnsign">Update product</button>
        </div>
    )
}

export default UpdateProduct;