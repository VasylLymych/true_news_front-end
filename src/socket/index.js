import io from "socket.io-client";

const socket = io('http://localhost:5000', {reconnect: true, autoConnect: true});

export default socket