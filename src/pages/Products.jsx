import { useState } from "react";
import Product from "../components/Product"; 
import productsData from "../../data/productData";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header"
import "./Products.css"
import NavBar from "../components/NavBar";

export default function Products() {
  //state variable for products
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stockQuantity: ""
  });

  //function to edit products, passed as prop to products component
  const handleEdit = (id, name, category, price, stockQuantity) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, name, category, price, stockQuantity } : product
    );
    setProducts(updatedProducts);
  };

  //function to delete product and re-render new list of products
  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  //function to add product
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stockQuantity) {
      alert("Please fill in all fields");
      return;
    }

    //adding id to new element by finding id of last element
    const id = Math.max(...products.map(product => product.id)) + 1;

    //adding new product to product list by spread operator
    const updatedProducts = [...products, { ...newProduct, id }];
    setProducts(updatedProducts);
    //making add product fields blank
    setNewProduct({ name: "", category: "", price: "", stockQuantity: "" });
    alert("Item added successfully!");
  };

  //function to display input change
  const handleInputChange = (event, field) => {
    setNewProduct({
      ...newProduct,
      [field]: event.target.value
    });
  };

  return (
    <div className="products">
      <Header/>
      <NavBar/>
      <div className="content">
        <h3>Add New Product</h3>
        <div>
        <form onSubmit={e => { e.preventDefault(); handleAddProduct(); }} className="addproduct">
            <TextField id="outlined-basic" label="Name" variant="outlined" value={newProduct.name} onChange={e => handleInputChange(e, "name")}/>&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Category" variant="outlined" value={newProduct.category} onChange={e => handleInputChange(e, "category")} />&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Price" variant="outlined" value={newProduct.price} onChange={e => handleInputChange(e, "price")}/>&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Stock Quantity" variant="outlined" value={newProduct.stockQuantity} onChange={e => handleInputChange(e, "stockQuantity")} />&nbsp;&nbsp;
            <Button variant="contained" type="submit" size="large" style={{marginTop:"5px"}}>Add Product</Button>
          </form>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              stockQuantity={product.stockQuantity}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
