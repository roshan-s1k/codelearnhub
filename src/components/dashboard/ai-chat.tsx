import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {Send} from "lucide-react"
import { Dialog ,DialogContent,DialogTrigger, DialogTitle} from "../ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import queryText from "@/utils/queryText";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function AiChat() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    {
      id: 2,
      text: "Hi! I have a question about your services.",
      sender: "user",
    },
    {
      id: 3,
      text: "Of course! I'd be happy to help. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
      };
      setMessages([...messages, newMsg]);

      const handleBotResponse = async () => {
        toast.dismiss();
        toast.loading("Thinking...");
        const response = await queryText(newMessage);
        const botResponse: Message = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        toast.dismiss();
      };

      handleBotResponse();

      setNewMessage("");
    }
  };

  return (
      <Dialog>
        <DialogTrigger className="w-60 flex justify-center">
                    <div
                      className="  bg-red-500 justify-center px-2 py-1 text-xl font-semibold transition-all border-2 rounded-xl border-black border-b-2 border-r-2 dark:border-white hover:-translate-y-[2px] hover:bg-slate-500"
                      >
                        Ask doubts to AI
                    </div>
          </DialogTrigger>
          <DialogContent className="w-full">

      <Card className="w-full mx-auto h-full bg-gray-700 flex flex-col justify-between z-40">
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide text-center font-semibold">AI DOUBT ASSISTANT</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            {messages.map((message, index) => (
              <code
                key={message.id}
                className={`flex items-start mb-4 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
                ref={index === messages.length - 1 ? sectionRef : null} 
                >
              
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                  }`}
                  >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </code>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full items-center space-x-1"
            >
            <Input
              placeholder="Ask your doubts here"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      </DialogContent>
      </Dialog>
  );
}
