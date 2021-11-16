import React, { useState } from 'react';

// ? if state is object => create a copy from latest state data using ...

const HookObject = () => {
    const [user, setUser] = useState({
        firstName: "", lastName: ""
    });

    const firstNameHandler = (e) => {
        setUser({
            ...user,
            firstName: e.target.value
        })
    }
    const lastNameHandler = (e) => {
        setUser({
            ...user,
            lastName: e.target.value
        });
    }

    return (
        <div>
            <form>
                <input type="text" value={user.firstName} onChange={firstNameHandler} />
                <input type="text" value={user.lastName} onChange={lastNameHandler} />

                <h2>My firstname is: {user.firstName}</h2>
                <h2>My lastname is: {user.lastName}</h2>
                <div>{JSON.stringify(user)}</div>
            </form>
        </div >
    );
}

export default HookObject;