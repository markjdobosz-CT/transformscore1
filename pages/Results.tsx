import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, BookOpen, Users, Target, TrendingUp } from 'lucide-react';
import { calculateScore, getScoreCategory, assessmentQuestions } from '../data/assessmentData';
import { trackAssessmentCompletion } from '../services/analyticsService';
import { getShareParams } from '../services/shareService';
import Footer from '../components/Footer';
import ShareAssessment from '../components/ShareAssessment';

const Results = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scoreCategory, setScoreCategory] = useState(getScoreCategory(0));

  useEffect(() => {
    const savedAnswers = localStorage.getItem('assessmentResults');
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setAnswers(parsedAnswers);
      const calculatedScore = calculateScore(parsedAnswers);
      setScore(calculatedScore);
      const category = getScoreCategory(calculatedScore);
      setScoreCategory(category);
      
      // Track the completion anonymously
      const shareParams = getShareParams();
      trackAssessmentCompletion(
        calculatedScore,
        category.title,
        parsedAnswers,
        shareParams.sharedBy
      );
    }
  }, []);

  const recommendations = [
    {
      icon: Users,
      title: "Start with Curiosity",
      description: "Begin every donor conversation by asking about their interests and what matters to them personally.",
      tips: [
        "Ask: 'What first got you interested in this issue?'",
        "Listen for personal stories and experiences",
        "Show genuine curiosity about their perspective"
      ]
    },
    {
      icon: Target,
      title: "Listen More, Talk Less",
      description: "Aim for 70% listening and 30% talking in your donor conversations.",
      tips: [
        "Ask follow-up questions to understand deeper",
        "Resist the urge to immediately connect to your organization",
        "Let donors share their full story before responding"
      ]
    },
    {
      icon: TrendingUp,
      title: "Connect Authentically",
      description: "Make connections between donor interests and your work naturally, not forcefully.",
      tips: [
        "Wait for organic opportunities to share your work",
        "Focus on shared values rather than organizational needs",
        "Let the connection emerge from their interests"
      ]
    }
  ];

  if (Object.keys(answers).length === 0) {
    return (
      <div className="flex flex-col h-full w-full">
        <header className="flex items-center sticky top-0 z-10 gap-4 border-b bg-white px-6 py-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold">Assessment Results</h1>
        </header>
        
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">No Results Found</h2>
            <p className="text-gray-600 mb-6">You need to complete the assessment first to see your results.</p>
            <Button asChild>
              <Link to="/assessment">Take Assessment</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b bg-white px-6 py-4">
        <SidebarTrigger />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Your Assessment Results</h1>
          <p className="text-sm text-muted-foreground">
            Based on your responses to {Object.keys(answers).length} questions
          </p>
        </div>
        <div className="flex gap-2">
          <ShareAssessment />
          <Button asChild variant="outline">
            <Link to="/assessment">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retake Assessment
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray={`${score}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">{score}%</span>
                    </div>
                  </div>
                </div>
                <CardTitle className={`text-2xl ${scoreCategory.color}`}>
                  {scoreCategory.title}
                </CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto">
                  {scoreCategory.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendations for Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <rec.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                      <CardDescription>{rec.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {rec.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Ready to transform your fundraising approach? Here are some concrete next steps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Practice Questions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "What first got you interested in this issue?"</li>
                      <li>• "What do you think would make the biggest difference?"</li>
                      <li>• "Have you seen any approaches that really impressed you?"</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Before Your Next Meeting:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Prepare curiosity-based questions</li>
                      <li>• Set a goal to listen 70% of the time</li>
                      <li>• Research the donor's interests, not just capacity</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <Link to="/resources">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Explore Resources
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/assessment">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retake Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;