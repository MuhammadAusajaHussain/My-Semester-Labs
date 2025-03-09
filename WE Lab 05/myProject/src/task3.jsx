import React from "react";

function task3({name, email, phone}){
    return(
        <div>
            <h2>Task 3 - Profile Card</h2>
            <h2>{name}</h2>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Phone: </strong>{phone}</p>
            <hr />
        </div>
    );
}

export default task3;