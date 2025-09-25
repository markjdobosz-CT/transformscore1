import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Target, TrendingUp, ArrowRight, User } from 'lucide-react';
import Footer from '../components/Footer';
import ShareAssessment from '../components/ShareAssessment';
import { getShareParams } from '../services/shareService';

const Index = () => {
  const [shareParams, setShareParams] = useState<{
    title?: string;
    description?: string;
    sharedBy?: string;
  }>({});

  useEffect(() => {
    const params = getShareParams();
    setShareParams(params);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Donor-Centered Approach",
      description: "Learn to connect with donors through genuine curiosity about their interests and passions."
    },
    {
      icon: Users,
      title: "Relationship Building",
      description: "Discover how to build meaningful relationships that go beyond transactional interactions."
    },
    {
      icon: Target,
      title: "Strategic Assessment",
      description: "Evaluate your current fundraising approach and identify areas for improvement."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Apply evidence-based strategies that successful fundraisers use to engage donors."
    }
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b bg-white px-6 py-4">
        <SidebarTrigger />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            {shareParams.title || 'Fundraising Assessment Pro'}
          </h1>
          {shareParams.sharedBy && (
            <Badge variant="secondary" className="gap-1 mt-1">
              <User className="h-3 w-3" />
              Shared by {shareParams.sharedBy}
            </Badge>
          )}
        </div>
        <ShareAssessment />
      </header>
      
      <main className="flex-1 overflow-auto">
        {/* Shared Message Banner */}
        {shareParams.sharedBy && (
          <section className="bg-blue-50 border-b px-6 py-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-blue-800">
                <span className="font-semibold">{shareParams.sharedBy}</span> has shared this fundraising assessment with you.
              </p>
              {shareParams.description && (
                <p className="text-blue-700 text-sm mt-1">{shareParams.description}</p>
              )}
            </div>
          </section>
        )}

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Stop Leading with Your Organization's Needs
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your fundraising approach by starting with curiosity about your donors. 
                Learn to connect authentically and build lasting relationships that benefit both your cause and your supporters.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/assessment">
                    {shareParams.sharedBy ? 'Take the Assessment' : 'Take Assessment'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/resources">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why This Approach Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Successful fundraisers know that people don't give to organizations—they give to causes they care about. 
                Start with their interests, not your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-gray-50 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6">
              "What if you started with curiosity about the person you're talking to instead?"
            </blockquote>
            <p className="text-lg text-gray-600 mb-8">
              By the time you talk about what your organization does, people are already thinking about 
              how they might want to be involved—because the conversation started with their interests, not your needs.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/assessment">
                {shareParams.sharedBy ? 'Start the Assessment' : 'Start Your Assessment'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;