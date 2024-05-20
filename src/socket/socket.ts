import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SERVER_URL + "/events", {
  autoConnect: false,
});

// TO REMOVE
socket.onAny((event, ...args) => {
  console.log("CATCH", event, args);
});

export default socket;
