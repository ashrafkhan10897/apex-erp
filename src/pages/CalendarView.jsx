import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ordersData from "../../data/orderData";
import Header from "../components/Header";
import "./CalendarView.css";
import NavBar from "../components/NavBar";

export default function CalendarViewComp() {
  //state variable for selecting current data
  const [selectedDate, setSelectedDate] = useState(new Date());

  //function to setSelected date
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  //setting tick mark on calender tiles
  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const hasOrdersDue = ordersData.some(order => order.expectedDelivery === formattedDate);
    return hasOrdersDue ? <div className="tick">✔</div> : null;
  };

  //filtering orders for date selected
  const filteredOrders = ordersData.filter(order => {
    const orderDate = new Date(order.expectedDelivery); // Use expectedDelivery instead of orderDate
    return (
      orderDate.getDate() === selectedDate.getDate() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  return (
    <div>
      <Header />
      <NavBar/>
      <h2>Orders Calendar View</h2>
        <div className='content'>
          <div className='calendar'>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={tileContent}
            />
          </div>
          <div>
            <h2>Orders due on {selectedDate.toDateString()}:</h2>
            <ul>
              {filteredOrders.map(order => (
                <li key={order.orderId}>
                  Order Id: {order.orderId}
                  <br/><br/>
                  Customer name: {order.customerName}
                  <br/><br/>
                  Current Order status: {order.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}
