// import "./App.css";
// import { useEffect, useState } from "react";


// function App() {
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");
//   function sendMessage() {
//     console.log("Button clicked");
//     socket.emit("send_message", { message: message });
//   }
//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <input
//         placeholder="Message"
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       />
//       <button onClick={sendMessage}>Send message</button>
//       <h1>
//         Message: {messageReceived}</h1>
//     </div>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div >
   
    <Outlet/>
   
    </div>
  )
}

export default App