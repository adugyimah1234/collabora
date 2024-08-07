import io from 'socket.io-client';

// eslint-disable-next-line no-undef
const socket = io(process.env.REACT_APP_API_URL); // Replace with your backend URL

export default socket;