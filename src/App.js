import React, { useEffect, useState } from 'react';
import './App.css'; // Importing CSS for styling

const App = () => {
  const [Des, setDes] = useState('');
  const [Amount, setAmount] = useState('');
  const [Total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [Catagory,setCatagory]=useState('');

  // Handle adding items to the cart
  const handleClick = () => {
    setCart([...cart, { Des, Amount: parseFloat(Amount) }]); // Convert Amount to number
    setAmount(''); // Reset Amount input
    setDes('');    // Reset Description input
  };

  // Handle deletion of items
  const handleDelete = (indexToDelete) => {
    setCart(cart.filter((m, index) => index !== indexToDelete));
  };

  // Handle description input
  const handleDes = (e) => {
    setDes(e.target.value);
  };

  // Handle amount input
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // Calculate total whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      const newTotal = cart.reduce((acc, item) => acc + item.Amount, 0); // Sum up Amount values
      setTotal(newTotal);
    } else {
      setTotal(0); // Reset total if cart is empty
    }
  }, [cart]);

  return (
    <div className="container">
      <div className='navbar'>
        Finacis App
      </div>

      <div className="input-box">
      <label>Description</label>
        <input
          type="text"
          name="Des"
          value={Des}
          onChange={handleDes}
          placeholder="Description"
        /> <br />
        <label>Amount</label>
        <input
          type="number"
          name="Amount"
          value={Amount}
          onChange={handleAmount}
          placeholder="Amount"
        />
         </div>
<div className='Button'> <button onClick={handleClick}>ADD</button></div>
       
     

      <div>
        <h3>Total: {Total}</h3>
      </div>

      <div className="results">
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, key) => (
        <tr key={key}>
          <td>{item.Des}</td>
          <td>{item.Amount}</td>
          <td>
            <button className="delete-btn" onClick={() => handleDelete(key)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default App;
