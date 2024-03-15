import Header from "../components/Header";
import Feature from "../components/Feature";
import "./Dashboard.css"
import Order from "../assets/order.jpg";
import Product from "../assets/product.jpg"
import OrderData from "../../data/orderData";
import ProductData from "../../data/productData";
import NavBar from "../components/NavBar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <NavBar/>
      <h2>Dashboard</h2>
      <div className="features">
          <Feature feature={"Total Products"} property={OrderData.length} btnText={"Explore"} link={"/products"} img={Product}/>
          <Feature feature={"Total Orders"} property={ProductData.length} btnText={"Manage Orders"} link={"/orders"} img={Order}/>
      </div>
    </div>
  );
}
