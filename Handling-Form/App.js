

import { useState } from "react";

import "./styles.css";

export default function App() {

    // const [fullName, setFullName] = useState("");

    const [data, setData] = useState({
        fullName: "",
        age: ""
    });


    const handleDataChange = (e) => {
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefaul();
        alert(data.fullName);
        alert('My name is ${data.fullName}, I am ${data.Age} years old')
    };

    return (
        <form>
                <lable>
                     full Name: <input  name = "fullName" onChange = {handleDataChange} value = {data.fullName} type = "text" />
                 </lable>

                 <lable>
                     Agw: <input name = "age" onChange = {handleDataChange} value = {data.age} type = "text" />
                 </lable>

                 <button type = "submit"> Done </button>
                
                 {/* <br/>
                 <br/>
                <p> {fullName} </p> */}
        </form>
    );
}



