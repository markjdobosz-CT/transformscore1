import React from 'react';
import { motion } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, MessageCircle, Target, Heart, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';

const Resources = () => {
  const principles = [
    {
      icon: Heart,
      title: "Start with Curiosity, Not Needs",
      description: "Every fundraiser has been taught to start with their organization's case for support. But what if you started with curiosity about the person you're talking to instead?",
      examples: [
        "What first got you interested in this issue?",
        "What do you think would make the biggest difference?",
        "Have you seen any approaches that really impressed you?"
      ]
    },
    {
      icon: Users,
      title: "People Give to Causes, Not Organizations",
      description: "Successful fundraisers understand that donors don't give to organizations—they give to causes they care about. The key is connecting their interests to your work.",
      examples: [
        "Listen for personal stories and experiences",
        "Ask about their vision for change",
        "Connect shared values, not organizational needs"
      ]
    },
    {
      icon: MessageCircle,
      title: "The Magic of Following Up",
      description: "When you don't want anything specific from someone, you can have much more authentic conversations. This creates space for genuine relationship building.",
      examples: [
        "Follow up without an ask",
        "Share relevant articles or updates",
        "Invite them to learning opportunities"
      ]
    }
  ];

  const strategies = [
    {
      category: "Conversation Starters",
      items: [
        "What first drew you to get involved with [cause]?",
        "What's been your experience with [issue] in our community?",
        "What would you most like to see change in this area?",
        "Have you seen any approaches to this problem that excited you?"
      ]
    },
    {
      category: "Deep Listening Techniques",
      items: [
        "Ask follow-up questions: 'Tell me more about that...'",
        "Reflect back what you heard: 'It sounds like...'",
        "Show genuine curiosity about their perspective",
        "Resist the urge to immediately connect to your organization"
      ]
    },
    {
      category: "Building Authentic Relationships",
      items: [
        "Share relevant resources without asking for anything",
        "Invite them to learning events, not fundraising events",
        "Connect them with others who share their interests",
        "Follow up on their interests, not your needs"
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b bg-white px-6 py-4">
        <SidebarTrigger />
        <h1 className="text-2xl font-semibold">Resources & Best Practices</h1>
      </header>
      
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <blockquote className="text-2xl font-medium text-gray-900 mb-4">
              "If you're a fundraiser, you probably didn't get into this work because you love asking people for money. 
              You got into it because you care about your cause and you want to connect other people who care about it too."
            </blockquote>
            <p className="text-lg text-gray-600">
              So let's talk about how to do that without feeling like a telemarketer just trying to make a sale.
            </p>
          </motion.div>

          {/* Core Principles */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Principles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <principle.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                      <CardDescription className="text-base">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-700">Try asking:</h4>
                        <ul className="space-y-1">
                          {principle.examples.map((example, exIndex) => (
                            <li key={exIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Practical Strategies */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={strategy.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {strategy.category}
                      </Badge>
                      <CardTitle className="text-lg">{strategy.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {strategy.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* The Transformation */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">❌ Organization-Centered Approach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "Let me tell you about our organization..."</li>
                  <li>• "We need funding for..."</li>
                  <li>• "Here's what we do..."</li>
                  <li>• "Would you consider a gift of..."</li>
                  <li>• Focus on organizational needs first</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Donor-Centered Approach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "What first got you interested in this issue?"</li>
                  <li>• "What would you most like to see change?"</li>
                  <li>• "Tell me about your experience with..."</li>
                  <li>• "What approaches have impressed you?"</li>
                  <li>• Focus on donor interests and values first</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 font-medium">
                "By the time he talks about what his organization does, people are already thinking about 
                how they might want to be involved. Because the conversation started with their interests, not his needs."
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;