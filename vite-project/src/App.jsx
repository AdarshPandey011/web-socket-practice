import { useEffect, useState } from "react";
import { WebSocketServer } from "ws";

import "./App.css";

function App() {
  const [socket, setSocket] = useState();

  function sendMsg() {
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send("msg");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      hi there <br />
      <input type="text" placeholder="message" />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}

export default App;
