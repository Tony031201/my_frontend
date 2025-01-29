import { useState } from "react";
import { ask } from "../services/ask";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "你好！我可以帮你解答问题。", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
  
    try {
      // 向后端发送用户问题
      const response = await ask(input);
  
      // 添加 AI 回复
      const aiMessage = { text: response.data.answer, sender: "bot" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error while sending question:", error);
      setMessages((prev) => [
        ...prev,
        { text: "AI无法回答您的问题，请稍后再试。", sender: "bot" },
      ]);
    }
  
    // 清空输入框
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-3 rounded-lg mb-2 max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="输入你的问题..."
        />
        <button onClick={handleSend} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">发送</button>
      </div>
    </div>
  );
};

export default ChatPage;