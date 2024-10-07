import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder, submitOrder } from '../app/store';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { branch, items, orderSubmitted } = useSelector(state => state.order);

  const handleSendOrder = () => {
    dispatch(submitOrder());
    console.log("Order submitted:", { branch, items });
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
