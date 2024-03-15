import { useEffect,useState } from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import ordersData from "../../data/orderData";
import "./Orders.css";
import NavBar from "../components/NavBar";

export default function Orders(){
    //state variable to store orders data
    const [orders,setOrders] = useState([])

    //Initializing data from orderData file
    useEffect(() => setOrders(ordersData), []);
    
    console.log(ordersData.length);
    //function to Edit status
    const editStatus = (id,status)=>{
        const updatedStatus = orders.map(order =>
            order.id === id ? { ...order, status } : order
          );
          setOrders(updatedStatus);
    }

    //function to Delete order
    const delOrder = (id)=>{
        const updatedOrders = orders.filter(order=>
            order.orderId !== id
        )
        setOrders(updatedOrders);
    }
    return(
        <>
            <Header/>
            <NavBar/>
            <h2>Orders</h2>
                <div className="content">
                    <div className="ord">
                        {
                            orders.map(order=>(
                                <Order
                                key={order.orderId}
                                orderId={order.orderId}
                                custName={order.customerName}
                                ordDate={order.orderDate}
                                status={order.status}
                                savStatus={editStatus}
                                delOrder={delOrder}
                                />
                            ))
                        }
                    </div>
                </div>
        </>
    )
}