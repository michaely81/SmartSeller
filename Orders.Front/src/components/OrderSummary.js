import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder, submitOrder } from '../app/store';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, items, orderSubmitted } = useSelector(state => state.order);

  const handleSendOrder = async () => {
    // Prepare order data
    const orderData = {
      id: "12345", 
      orderName: "Sample Order", 
      firstName: items[0]?.firstName, 
      lastName: items[0]?.lastName,
      address: items[0]?.address,
      email: items[0]?.email,
      quanitity: items.reduce((total, item) => total + item.quantity, 0), 
      categoryType: category 
    };

    try {
      // Send order data to API
      const response = await fetch('https://localhost:44323/api/Orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        dispatch(submitOrder()); // Dispatch success action
        console.log("Order submitted successfully:", orderData);
      } else {
        console.error("Failed to submit order:", response.status);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>סיכום הזמנה</h2>
      {orderSubmitted ? (
        <p>ההזמנה נשלחה בהצלחה!</p>
      ) : (
        <>
          <h3>פריטים בהזמנה:</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>שם פרטי : {item.firstName}, שם משפחה : {item.lastName}, כתובת : {item.address}, מייל: {item.email}, שם המוצר:  {item.name} - כמות: {item.quantity}</li>
            ))}
          </ul>
          <div>
            <button onClick={handleSendOrder}>שלח הזמנה</button>
            <button onClick={handleGoBack}>חזור</button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
