import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, MessageCircle, Sparkles } from 'lucide-react';

const Agent = ({ shopData, shopUpdates, onClose, onSendReport, onLogFeedback }) => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: `Hello! I'm your AI assistant for ${shopData.businessName}. How can I help you today?`
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionEnded, setSessionEnded] = useState(false);
    const messagesEndRef = useRef(null);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const generateAIResponse = async (userQuery, systemPrompt) => {
      const payload = {
          contents: [{ parts: [{ text: userQuery }] }],
          tools: [{ "google_search": {} }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
      };
    
      const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });
      const result = await response.json();
      return result.candidates[0].content.parts[0].text;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || sessionEnded) return;
        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const updatesSummary = shopUpdates.length > 0 ? shopUpdates.map(update => 
                `Heading: ${update.heading}\nContent: ${update.content}\nCategory: ${update.category}\nHashtags: ${update.hashtags.join(', ')}\n`
            ).join('\n---\n') : 'No recent updates available.';

            const systemPrompt = `
                You are an AI assistant for a business named ${shopData.businessName}. 
                Your purpose is to answer customer queries about the shop's offerings, availability, and general information. 
                Keep your responses concise, helpful, and friendly. 
                Here is the shop's information:
                Business Name: ${shopData.businessName}
                Business Type: ${shopData.BusinessInfo}
                Location: ${shopData.address}, ${shopData.pincode}
                Main Category: ${shopData.category || 'N/A'}
                
                Here are the latest updates from the shop:
                ${updatesSummary}
            `;

            const response = await generateAIResponse(currentInput, systemPrompt);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am unable to connect with the server. Please try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSessionEnd = async (satisfied) => {
        setSessionEnded(true);
        if (satisfied) {
            onLogFeedback(shopData.id, messages);
            setMessages(prev => [...prev, { role: 'assistant', content: "Thank you for your feedback! We hope to see you again soon." }]);
        } else {
            const systemPrompt = `
                You are a reporting agent. Summarize the following conversation to help a business owner improve.
                Highlight key customer queries, any unanswered questions, and overall customer sentiment.
                Format the output as a concise report.
            `;
            const conversationSummary = messages.map(msg => `${msg.role}: ${msg.content}`).join('\n');
            const report = await generateAIResponse(conversationSummary, systemPrompt);
            onSendReport(shopData.email, report);
            setMessages(prev => [...prev, { role: 'assistant', content: "Thank you for your feedback. A report has been sent to the shop owner to help them improve." }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="flex flex-col h-full bg-transparent">
            <div className="bg-[#0D1829]/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full border border-[#383838]">
                <div className="bg-gradient-to-r from-[#0B1222] to-[#0D1829] p-4 border-b border-[#383838]">
                    <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 text-[#DAA520] mr-3" />
                        <span className="text-[#C0C0C0] font-medium">Chat with {shopData.businessName} Assistant</span>
                        <div className="ml-auto flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
                            <span className="text-[#A9A9A9] text-sm">Online</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-[#0B1222]/90 to-[#0D1829]/90">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-3xl px-5 py-3 shadow-lg ${
                                    message.role === 'user'
                                        ? 'bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-[#F8F8FF] rounded-br-md'
                                        : 'bg-[#0D1829] text-[#C0C0C0] rounded-bl-md border border-[#383838]'
                                }`}
                            >
                                <div className="font-semibold mb-1 flex items-center text-sm">
                                    {message.role === 'user' ? (
                                        <>
                                            <span className="mr-2">You</span>
                                            <div className="w-6 h-6 rounded-full bg-[#DAA520]/20 flex items-center justify-center">
                                                <User className="w-3 h-3" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0F1C2E] to-[#0D1829] flex items-center justify-center mr-2 border border-[#DAA520]/20">
                                                <Bot className="w-3 h-3" />
                                            </div>
                                            <span>AI Assistant</span>
                                        </>
                                    )}
                                </div>
                                <div className="leading-relaxed whitespace-pre-wrap">{message.content}</div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start mb-4">
                            <div className="bg-[#0D1829] rounded-3xl px-5 py-3 rounded-bl-md border border-[#383838] max-w-[85%] shadow-lg">
                                <div className="font-semibold mb-1 flex items-center text-sm text-[#C0C0C0]">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0F1C2E] to-[#0D1829] flex items-center justify-center mr-2 border border-[#DAA520]/20">
                                        <Bot className="w-3 h-3" />
                                    </div>
                                    <span>AI Assistant</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#DAA520] animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#DAA520] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-[#DAA520] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    <span className="text-[#A9A9A9] text-sm ml-2">Crafting response...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {sessionEnded ? (
                    <div className="p-4 border-t border-[#383838] text-center bg-gradient-to-r from-[#0B1222] to-[#0D1829]">
                        <p className="text-[#C0C0C0] text-lg">Session ended. Thank you for your feedback!</p>
                        <button
                            onClick={() => onClose()}
                            className="mt-4 bg-gray-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-gray-700 transition-all"
                        >
                            Close Chat
                        </button>
                    </div>
                ) : (
                    <div className="p-4 border-t border-[#383838] bg-gradient-to-r from-[#0B1222] to-[#0D1829]">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="How may we assist you today?"
                                className="flex-1 bg-[#0D1829]/90 border border-[#383838] rounded-xl px-4 py-3 text-[#C0C0C0] placeholder-[#696969] focus:outline-none focus:ring-2 focus:ring-[#DAA520]/50 focus:border-[#DAA520]/50 transition-all duration-200"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#F8F8FF] font-semibold rounded-xl px-6 py-3 hover:from-[#DAA520] hover:to-[#B8860B] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg border border-[#FFD700]/20"
                                disabled={isLoading || !input.trim()}
                            >
                                <Send className="w-4 h-4" />
                                <span>Send</span>
                            </button>
                        </div>
                        <div className="mt-4 flex justify-between space-x-4">
                            <button
                                onClick={() => handleSessionEnd(true)}
                                className="flex-1 bg-green-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-green-700 transition-colors"
                            >
                                End Chat (Satisfied)
                            </button>
                            <button
                                onClick={() => handleSessionEnd(false)}
                                className="flex-1 bg-red-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-red-700 transition-colors"
                            >
                                End Chat (Not Satisfied)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Agent;
