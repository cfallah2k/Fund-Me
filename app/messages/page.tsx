'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video,
  Image as ImageIcon,
  Paperclip,
  Smile,
  Mic,
  Check,
  CheckCheck,
  Clock,
  User,
  MessageCircle,
  Star,
  Filter
} from 'lucide-react'

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState('1')
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      user: {
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/40/40',
        isOnline: true,
        isVerified: true
      },
      lastMessage: 'Thank you for your investment! The campaign is progressing well.',
      timestamp: '2 min ago',
      unreadCount: 0,
      campaign: {
        title: 'Solar Energy for Rural Communities',
        id: '1'
      }
    },
    {
      id: '2',
      user: {
        name: 'Michael Chen',
        avatar: '/api/placeholder/40/40',
        isOnline: false,
        isVerified: true
      },
      lastMessage: 'I\'m interested in learning more about your AI healthcare platform.',
      timestamp: '1 hour ago',
      unreadCount: 2,
      campaign: {
        title: 'Tech Startup - AI Healthcare Platform',
        id: '2'
      }
    },
    {
      id: '3',
      user: {
        name: 'Amina Hassan',
        avatar: '/api/placeholder/40/40',
        isOnline: true,
        isVerified: false
      },
      lastMessage: 'When will the mobile banking app be available for testing?',
      timestamp: '3 hours ago',
      unreadCount: 0,
      campaign: {
        title: 'Mobile Banking App for Rural Areas',
        id: '5'
      }
    },
    {
      id: '4',
      user: {
        name: 'David Okafor',
        avatar: '/api/placeholder/40/40',
        isOnline: false,
        isVerified: true
      },
      lastMessage: 'The education fund campaign has been a huge success!',
      timestamp: '1 day ago',
      unreadCount: 0,
      campaign: {
        title: 'Education Fund for Orphans',
        id: '3'
      }
    },
    {
      id: '5',
      user: {
        name: 'Lisa Wang',
        avatar: '/api/placeholder/40/40',
        isOnline: true,
        isVerified: true
      },
      lastMessage: 'I received my investment returns. Thank you for the transparency!',
      timestamp: '2 days ago',
      unreadCount: 1,
      campaign: {
        title: 'AgriTech Innovation Hub',
        id: '4'
      }
    }
  ]

  // Mock messages data
  const messages = {
    '1': [
      {
        id: '1',
        sender: 'them',
        content: 'Hi! Thank you for your investment in our solar energy campaign.',
        timestamp: '10:30 AM',
        status: 'read'
      },
      {
        id: '2',
        sender: 'me',
        content: 'You\'re welcome! I\'m excited to see the impact this will have on rural communities.',
        timestamp: '10:32 AM',
        status: 'read'
      },
      {
        id: '3',
        sender: 'them',
        content: 'We\'ve reached 90% of our funding goal! The installations will begin next month.',
        timestamp: '10:35 AM',
        status: 'read'
      },
      {
        id: '4',
        sender: 'me',
        content: 'That\'s fantastic news! Will you be sharing progress updates?',
        timestamp: '10:37 AM',
        status: 'read'
      },
      {
        id: '5',
        sender: 'them',
        content: 'Absolutely! We\'ll be posting regular updates with photos and videos of the installations.',
        timestamp: '10:40 AM',
        status: 'read'
      },
      {
        id: '6',
        sender: 'them',
        content: 'Thank you for your investment! The campaign is progressing well.',
        timestamp: '2 min ago',
        status: 'sent'
      }
    ]
  }

  const selectedConversation = conversations.find(conv => conv.id === selectedChat)
  const currentMessages = messages[selectedChat as keyof typeof messages] || []

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText)
      setMessageText('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-accent-900">Messages</h1>
              <p className="text-accent-600">Connect with campaign creators and investors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-3 h-[600px]">
            {/* Conversations List */}
            <div className="lg:col-span-1 border-r border-accent-200">
              {/* Search */}
              <div className="p-4 border-b border-accent-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="overflow-y-auto h-[calc(600px-80px)]">
                {filteredConversations.map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 border-b border-accent-200 cursor-pointer transition-colors ${
                      selectedChat === conversation.id ? 'bg-primary-50' : 'hover:bg-accent-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                          <span className="text-accent-600 font-semibold">
                            {conversation.user.name.charAt(0)}
                          </span>
                        </div>
                        {conversation.user.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-accent-900 truncate">
                              {conversation.user.name}
                            </span>
                            {conversation.user.isVerified && (
                              <span className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center">
                                <Check className="w-2 h-2 text-white" />
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-accent-500">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-accent-600 truncate mb-1">
                          {conversation.lastMessage}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-accent-500 truncate">
                            {conversation.campaign.title}
                          </span>
                          {conversation.unreadCount > 0 && (
                            <span className="w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-accent-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                            <span className="text-accent-600 font-semibold">
                              {selectedConversation.user.name.charAt(0)}
                            </span>
                          </div>
                          {selectedConversation.user.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-accent-900">
                              {selectedConversation.user.name}
                            </span>
                            {selectedConversation.user.isVerified && (
                              <span className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center">
                                <Check className="w-2 h-2 text-white" />
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-accent-600">
                            {selectedConversation.campaign.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                          <Video className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-accent-50">
                    <div className="space-y-4">
                      {currentMessages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'me' 
                              ? 'bg-primary-600 text-white' 
                              : 'bg-white text-accent-900 border border-accent-200'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            <div className={`flex items-center justify-end space-x-1 mt-1 ${
                              message.sender === 'me' ? 'text-primary-100' : 'text-accent-500'
                            }`}>
                              <span className="text-xs">{message.timestamp}</span>
                              {message.sender === 'me' && (
                                <span className="text-xs">
                                  {message.status === 'read' ? (
                                    <CheckCheck className="w-3 h-3" />
                                  ) : message.status === 'sent' ? (
                                    <Check className="w-3 h-3" />
                                  ) : (
                                    <Clock className="w-3 h-3" />
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-accent-200 bg-white">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                        <ImageIcon className="w-5 h-5" />
                      </button>
                      <div className="flex-1">
                        <textarea
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          rows={1}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                        />
                      </div>
                      <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                        <Smile className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                        <Mic className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleSendMessage}
                        disabled={!messageText.trim()}
                        className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Empty State */
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-accent-900 mb-2">No conversation selected</h3>
                    <p className="text-accent-600">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesPage
