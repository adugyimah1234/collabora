/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';


const useSocket = (endpoint: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket: Socket = io(`${import.meta.env.VITE_APP_SOCKET_URL}${endpoint}`);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Properly disconnect the socket
    };
  }, [endpoint]);

  return socket;
};

export default useSocket;