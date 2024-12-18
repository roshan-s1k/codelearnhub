import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import queryText from "@/utils/queryText";
import ReactMarkdown from "react-markdown";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export function AiChat() {
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
        const response = await queryText(newMessage);
        const botResponse: Message = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      };
      handleBotResponse();
      setNewMessage("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-60 flex justify-center">
        <div className="bg-pink-600 text-white text-xl font-semibold py-2 px-4 rounded-lg transition-all border-2 border-black hover:bg-pink-700 transform hover:-translate-y-1">
          Ask doubts to AI
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl mx-auto ">
      <DialogTitle className="sr-only">AI Doubt Assistant</DialogTitle>
        <Card className="w-full bg-gray-800 rounded-lg shadow-lg flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center text-white tracking-wider">
              AI DOUBT ASSISTANT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4 rounded-lg border bg-slate-700">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  ref={index === messages.length - 1 ? sectionRef : null}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[70%] ${
                      message.sender === "user"
                        ? "bg-pink-600 text-white shadow-lg"
                        : "bg-green-500 text-gray-900 shadow-sm"
                    }`}
                  >
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="bg-gray-800 p-4 rounded-b-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                placeholder="Ask your doubts here"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 w-full"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-pink-600 text-white hover:bg-pink-700 rounded-lg p-2"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
