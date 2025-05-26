import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {

    const data=useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>Total users- {data.length}</h1>
            <div>
                {
                    data.map(user=> <li key={user._id}> Name: {user.name}, Email: {user.email}</li>)
                }
            </div>
        </div>
    );
};

export default User;