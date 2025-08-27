import { useState }  from "react";

export default function Greeting() {
    const [message, setMessage] = useState('');
    const handleClick = () => {
        setMessage("Welcome!");
      };

      return (
        <div>
          <button onClick={handleClick}>Show Message</button>
          <div style={{ marginTop: '20px' }}>
            {message}
          </div>
        </div>
      );
}
