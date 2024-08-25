import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useSocket from '../hooks/useSocket';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useEventModal from '../hooks/useEventModal';
import CreateEventModal from './CreateEventModal';
import MessageList from './MessageList';

// Schema for message validation
const messageSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

type MessageType = {
  content: string;
  sender: string;
  timestamp: Date;
};

const GroupChat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { connected, on, off, emit } = useSocket(process.env.REACT_APP_API_URL || 'http://localhost:8000');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { showModal, setShowModal, eventDate, setEventDate, handleEventCreation } = useEventModal();
  const form = useForm<z.infer<typeof messageSchema>>({ resolver: zodResolver(messageSchema) });

  useEffect(() => {
    if (connected) {
      on('newMessage', (msg: MessageType) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });

      return () => {
        off('newMessage');
      };
    }
  }, [connected, on, off]);

  const sendMessage = async (data: z.infer<typeof messageSchema>) => {
    try {
      if (!id) return;

      const studyGroupId = parseInt(id, 10);

      if (connected) {
        emit('sendMessage', { groupId: studyGroupId, content: data.message });
        setMessages((prevMessages) => [...prevMessages, { content: data.message, sender: 'You', timestamp: new Date() }]);
        setMessage('');
        form.reset(); // Reset form after sending message
        toast({ description: 'Your message has been sent.' });
      } else {
        console.error('Cannot send message. Socket is not connected.');
      }
    } catch (error) {
      console.error('Error sending message:', error instanceof Error ? error.message : error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <MessageList messages={messages.filter((msg) => msg.content.toLowerCase().includes(searchTerm.toLowerCase()))} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendMessage)}
          className="flex items-center p-4 bg-background"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input
                    placeholder="Type a message..."
                    {...field}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-2">Send</Button>
        </form>
      </Form>

      <CreateEventModal
        showModal={showModal}
        setShowModal={setShowModal}
        eventDate={eventDate}
        setEventDate={setEventDate}
        handleEventCreation={handleEventCreation}
      />
    </div>
  );
};

export default GroupChat;