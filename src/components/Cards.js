import React from 'react';
import '../styles/cards.css';

function Cards({ item, handleClick }) {
    const { title, author, price, img } = item;

    return (
        <div className='cards'>
            <div className='image_box'>
                <img src={img} alt={title} />
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{author}</p>
                <p>Price={price}</p>
                <button onClick={() => handleClick(item)}>Add to cart</button>
            </div>
        </div>
    );
}

export default Cards;
