import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Mic, MicOff, Bot } from 'lucide-react'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your VisioBiz AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputText.trim() === '') return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages([...messages, userMessage])
    setInputText('')

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! I'm here to help you discover amazing local shops. What are you looking for today?"
    } else if (lowerInput.includes('clothing') || lowerInput.includes('fashion')) {
      return "Great! I can recommend some excellent fashion boutiques. Would you like to see stores near you or by specific categories?"
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return "I can help you find shops within your budget. What's your price range?"
    } else if (lowerInput.includes('location') || lowerInput.includes('near me')) {
      return "I can show you shops based on your current location. Would you like to enable location services?"
    } else {
      return "I'm here to help you discover local shops! You can ask me about specific categories, prices, locations, or anything else you need help with."
    }
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    // In a real app, this would integrate with speech recognition API
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gold-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gold"
        >
          <MessageCircle className="h-6 w-6 text-bg-primary" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-bg-secondary rounded-lg shadow-xl border border-gold-primary/20 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gold-primary/10 p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center mr-2">
                <Bot className="h-5 w-5 text-bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gold-primary">VisioBiz AI Assistant</h3>
                <p className="text-xs text-gold-light">Online - Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gold-primary hover:text-gold-light transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gold-primary text-bg-primary rounded-br-none'
                        : 'bg-bg-primary/50 text-gold-light rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gold-primary/20">
            <div className="flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-bg-primary/50 border border-gold-primary/30 rounded-l-lg px-3 py-2 text-gold-light placeholder-gold-primary/60 focus:outline-none focus:ring-1 focus:ring-gold-primary"
              />
              <button
                onClick={toggleListening}
                className={`px-3 py-2 border-y border-gold-primary/30 ${
                  isListening ? 'bg-red-500/20 text-red-400' : 'text-gold-primary hover:bg-gold-primary/10'
                }`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-gold-primary text-bg-primary px-3 py-2 rounded-r-lg hover:bg-gold-primary/90 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotWidget