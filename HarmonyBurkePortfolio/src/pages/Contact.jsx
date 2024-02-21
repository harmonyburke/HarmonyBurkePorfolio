import { useState } from "react";

export default function Contact() {

const [email, setEmail]=useState('');
const [name, setName]= useState('');
const [message, setMessage]=useState('');

const handleInputChange =(e) =>{
    const {target} = e;
    const inputType=target.name;
    const inputValue=target.value;

    if (inputType==='email'){
        setEmail(inputValue);
    } else if (inputType==='name'){
        setName(inputValue);
    } else {
        setMessage(inputValue);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
        alert('All fields must be completed!');

        return;
    }

    setEmail('');
    setMessage('');
    setName('');
};

return (
    <div className="container text-center" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px', height:'max'}}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a short message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}