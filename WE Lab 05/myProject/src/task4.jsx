import React, {useState} from "react";

function task4(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function validate(){
        let newErrors = {};
        if (formData.name.trim() == ""){
            newErrors.name = 'Name is required';
        }
        if (!formData.email.includes('@')){
            newErrors.email = 'Valid email required';
        }
        if (formData.password.length < 8){
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword){
            newErrors.confirmPassword = 'Passwords must match';
        }

        if (Object.keys(newErrors).length > 0) {
            alert(Object.values(newErrors).join("\n"));
            return false;
        }
        return true;
    }

    function handleSubmit(e){
        e.preventDefault();
        if(validate()){
            alert("Form Submitted Successfully");
        }
    }

    return(
        <div>
            <h2>Task 4 - Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text"
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email"
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password"
                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="cnfrmPassword">Confirm Password: </label>
                    <input id="cnfrmPassword" type="password"
                     onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    );
}

export default task4;