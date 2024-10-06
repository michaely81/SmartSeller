import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBranch, addItem, clearOrder } from '../app/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { branch, items } = useSelector(state => state.order);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://api.example.com/items'); 
        // setItems(response.data); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  const handleBranchChange = (e) => {
    dispatch(setBranch(e.target.value));
  };

  const handleAddItem = () => {
    if (newItem.name) {
      dispatch(addItem(newItem));
      setNewItem({ name: '', quantity: 1 });
    }
  };

  const handleSave = () => {
    navigate('/summary');
  };

  const handleCancel = () => {
    dispatch(clearOrder());
  };

  if (loading) return <p>המסך בטעינה, יש להמתין</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>רשימת קניות</h2>
      <label htmlFor="branch">בחר קטגוריה:</label>
      <select id="branch" value={branch} onChange={handleBranchChange}>
        <option value="store1">חלב וגבינות</option>
        <option value="store2">בשר</option>
        <option value="store3">ירקות ופירות</option>
      </select>

      <h3>מוצרים:</h3>
      <ul>
        {items.length === 0 ? <li>אין מוצרים</li> : items.map((item, index) => (
          <li key={index}>{item.name} - כמות: {item.quantity}</li>
        ))}
      </ul>

      <h4>הוסף מוצר</h4>
      <input
        type="text"
        placeholder="שם מוצר"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="number"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
      />
      <button onClick={handleAddItem}>הוסף מוצר</button>

      <div>
        <button onClick={handleSave}>שמור והמשך</button>
        <button onClick={handleCancel}>בטל</button>
      </div>
    </div>
  );
};

export default ShoppingList;
