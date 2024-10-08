import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, addItem, clearOrder } from '../app/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, items } = useSelector(state => state.order);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, firstName: '', lastName: '', address: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          "Category": [
            {
              "Id": "427779e2-62f3-4877-9113-9958137653cd",
              "CategoryName": "מוצרי חלב",
              "CategoryType": 1
            },
            {
              "Id": "127779e2-62f3-4877-9113-9958137653cd",
              "CategoryName": "בשר",
              "CategoryType": 2
            },
            {
              "Id": "123339e2-62f3-4877-9113-9958137653cd",
              "CategoryName": "ירקות ופירות",
              "CategoryType": 3
            }
          ]
        };

        setCategories(data.Category);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleProductChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleAddItem = () => {
    const { firstName, lastName, address, email, name, quantity } = newItem;

    if (!firstName || !lastName || !address || !email || !name || quantity <= 0) {
      setFormError('כל השדות נדרשים והכמות חייבת להיות גדולה מ-0');
      return;
    }

    if (!emailRegex.test(email)) {
      setFormError('אנא הזן כתובת מייל תקינה');
      return;
    }

    setFormError('');
    dispatch(addItem(newItem));
    setNewItem({ name: '', quantity: 1, firstName: '', lastName: '', address: '', email: '' });
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
      <label htmlFor="category">בחר קטגוריה:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category.Id} value={category.CategoryType}>
            {category.CategoryName}
          </option>
        ))}
      </select>

      <h3>מוצרים:</h3>
      <ul>
        {items.length === 0 ? <li>אין מוצרים</li> : items.map((item, index) => (
          <li key={index}>
            שם פרטי : {item.firstName}, שם משפחה : {item.lastName}, כתובת : {item.address}, מייל: {item.email}, שם המוצר:  {item.name} - כמות: {item.quantity}
          </li>
        ))}
      </ul>

      <h4>הוסף מוצר</h4>
      <input
        type="text"
        placeholder="שם פרטי"
        value={newItem.firstName}
        onChange={(e) => setNewItem({ ...newItem, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="שם משפחה"
        value={newItem.lastName}
        onChange={(e) => setNewItem({ ...newItem, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="כתובת"
        value={newItem.address}
        onChange={(e) => setNewItem({ ...newItem, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="מייל"
        value={newItem.email}
        onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
      />
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

      {formError && <p style={{ color: 'red' }}>{formError}</p>} {/* Display error if fields are missing or invalid */}

      <div>
        <button onClick={handleSave}>שמור והמשך</button>
        <button onClick={handleCancel}>בטל</button>
      </div>
    </div>
  );
};

export default ShoppingList;
