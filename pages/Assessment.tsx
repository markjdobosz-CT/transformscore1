import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assessmentQuestions, calculateScore } from '../data/assessmentData';
import Footer from '../components/Footer';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      
      if (currentQuestion < assessmentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(answers[currentQuestion + 1] || '');
      } else {
        // Complete the assessment
        const finalAnswers = { ...answers, [currentQuestion]: selectedAnswer };
        
        // Store results
        localStorage.setItem('assessmentResults', JSON.stringify(finalAnswers));
        
        navigate('/results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || '');
    }
  };

  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b bg-white px-6 py-4">
        <SidebarTrigger />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Fundraising Assessment</h1>
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {assessmentQuestions.length}
          </p>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">{question.question}</CardTitle>
                  {question.description && (
                    <CardDescription className="text-base">
                      {question.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={setSelectedAnswer}
                    className="space-y-4"
                  >
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value={option.value} id={`option-${index}`} className="mt-1" />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          <div className="font-medium mb-1">{option.text}</div>
                          {option.description && (
                            <div className="text-sm text-muted-foreground">
                              {option.description}
                            </div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === assessmentQuestions.length - 1 ? 'Complete Assessment' : 'Next'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessment;