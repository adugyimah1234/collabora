/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

interface UseSocketOptions {
  url: string;
  options?: object;
}

const useSocket = ({ url, options }: UseSocketOptions) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (url) {
      socketRef.current = io(url, options);
      return () => {
        socketRef.current?.disconnect();
      };
    }
  }, [url, options]);

  const emit = useCallback((event: string, data: any) => {
    socketRef.current?.emit(event, data);
  }, []);

  const on = useCallback((event: string, callback: (data: any) => void) => {
    socketRef.current?.on(event, callback);
  }, []);

  const off = useCallback((event: string, callback: (data: any) => void) => {
    socketRef.current?.off(event, callback);
  }, []);

  return { emit, on, off };
};

export default useSocket;