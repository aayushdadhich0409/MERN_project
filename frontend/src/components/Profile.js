import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [Products, setProducts] = React.useState([]);

  React.useEffect(() => {
    pro();
  }, []);

  const pro = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/profile", {
      method: "post",
      body: JSON.stringify({ userId }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
    setProducts(result);
    console.log(Products);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:5000/Product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      pro();
    }
    console.log(result);
  };
  return (
    <div
      className="page2"
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/HbbYW1CiYbhl1HU_2Bpsh9GxRNtfmen7fnFztbxco2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWNvaW5zLWNvcHkt/c3BhY2UtYmFja2dy/b3VuZF8yMy0yMTQ4/MzA1OTE5LmpwZz9z/aXplPTYyNiZleHQ9/anBn")`,
      }}
    >
      <div className="Product-list">
        <h1>Your Orders...</h1>
        {Products.map((item, index) => (
          <div className="card" style={{ width: "300px" }}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">${item.Price}</h6>

              <p className="card-text">Category: {item.Category}</p>
              <h6>Company: {item.Company}</h6>
              <button
                className="button-88"
                onClick={() => deleteProduct(item._id)}
              >
                Delete
              </button>
              <button className="button2">
                <Link className="a" to={"/update/" + item._id}>
                  Update
                </Link>
              </button>
            </div>
          </div>
        ))}
        {/* <div class="card-container">
          <div class="card1">
            <div class="card-face front">
              <p>Front</p>
            </div>
            <div class="card-face back">
              <p>Back</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
