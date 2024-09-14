import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';

const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
        const isPresent = cart.some((product) => item.id === product.id);
        
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        
        setCart([...cart, { ...item, amount: 1 }]);
    };

    const handleChange = (item, delta) => {
        const updatedCart = cart.map((data) =>
            data.id === item.id
                ? { ...data, amount: Math.max(data.amount + delta, 1) }
                : data
        );
        setCart(updatedCart);
    };

    return (
        <React.Fragment>
            <Navbar size={cart.length} setShow={setShow} />
            {show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            {warning && <div className='warning'>Item is already added to your cart</div>}
        </React.Fragment>
    );
};

export default App;
