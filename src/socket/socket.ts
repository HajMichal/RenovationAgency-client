import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SERVER_URL + "/events", {
  autoConnect: false,
  extraHeaders: {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkJvYiIsImlhdCI6MTcxNTg5MTM4NywiZXhwIjoxNzE1ODk0OTg3fQ.Ol8idDLpJ8kXtUcurXgZ6qCo6fqmlLtl17Jno-Z2BXY",
  },
});

// TO REMOVE
socket.onAny((event, ...args) => {
  console.log("CATCH", event, args);
});

export default socket;
