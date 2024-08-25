/* eslint-disable @typescript-eslint/no-explicit-any */
import io, { Socket } from 'socket.io-client';

// Define the type for the socket events and data
type EventCallback = (data: any) => void;

const useSocket = (url: string) => {
  const socket: Socket = io(url);

  // Function to listen to an event
  const on = (event: string, callback: EventCallback) => {
    socket.on(event, callback);
  };

  // Function to stop listening to an event
  const off = (event: string) => {
    socket.off(event);
  };

  // Function to emit an event
  const emit = (event: string, data: any) => {
    socket.emit(event, data);
  };

  return {
    connected: socket.connected,
    on,
    off,
    emit,
    error: () => {
      // Implement error handling if needed
      console.error('Socket error');
    },
  };
};

export default useSocket;