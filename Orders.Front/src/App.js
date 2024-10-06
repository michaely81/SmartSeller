import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import ShoppingList from './components/ShoppingList';
import OrderSummary from './components/OrderSummary';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ShoppingList />} />
            <Route path="/summary" element={<OrderSummary />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
