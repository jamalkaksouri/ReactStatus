import React, { useState } from 'react';

const HookArray = () => {
    const [item, setItem] = useState([]);

    const addedItem = { id: item.length, numer: Math.floor(Math.random() * 10) };
    const updatedItem = [...item, addedItem];

    const ItemHandler = () => {
        // setItem([
        //     ...item,
        //     { id: item.length, numer: Math.floor(Math.random() * 10) }
        // ]);
        setItem(updatedItem);
    }

    return (
        <div>
            <button onClick={ItemHandler}>Add Item</button>
            {item.map((item, key) => {
                return (
                    <li key={key}>
                        {item.numer}
                    </li>
                )
            })}
        </div>
    );
}

export default HookArray;