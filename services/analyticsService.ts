import { v4 as uuidv4 } from 'uuid';

export interface AnonymousResult {
  id: string;
  timestamp: Date;
  score: number;
  scoreCategory: string;
  answers: Record<number, string>;
  sharedBy?: string;
  userAgent?: string;
  referrer?: string;
}

// In-memory storage (in a real app, this would be a database)
const anonymousResults: AnonymousResult[] = [];

export const trackAssessmentCompletion = (
  score: number,
  scoreCategory: string,
  answers: Record<number, string>,
  sharedBy?: string
): void => {
  const result: AnonymousResult = {
    id: uuidv4(),
    timestamp: new Date(),
    score,
    scoreCategory,
    answers,
    sharedBy,
    userAgent: navigator.userAgent,
    referrer: document.referrer || undefined,
  };
  
  anonymousResults.push(result);
  console.log('Assessment completion tracked:', result.id);
};

export const getAnonymousResults = (): AnonymousResult[] => {
  return [...anonymousResults].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

export const getAnalyticsSummary = () => {
  const results = getAnonymousResults();
  const totalCompletions = results.length;
  
  if (totalCompletions === 0) {
    return {
      totalCompletions: 0,
      averageScore: 0,
      scoreDistribution: {},
      categoryDistribution: {},
      completionsBySharer: {},
      recentCompletions: [],
    };
  }
  
  const averageScore = Math.round(
    results.reduce((sum, result) => sum + result.score, 0) / totalCompletions
  );
  
  const scoreDistribution = results.reduce((acc, result) => {
    const scoreRange = getScoreRange(result.score);
    acc[scoreRange] = (acc[scoreRange] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const categoryDistribution = results.reduce((acc, result) => {
    acc[result.scoreCategory] = (acc[result.scoreCategory] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const completionsBySharer = results.reduce((acc, result) => {
    const sharer = result.sharedBy || 'Direct Access';
    acc[sharer] = (acc[sharer] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const recentCompletions = results.slice(0, 10);
  
  return {
    totalCompletions,
    averageScore,
    scoreDistribution,
    categoryDistribution,
    completionsBySharer,
    recentCompletions,
  };
};

const getScoreRange = (score: number): string => {
  if (score >= 80) return '80-100%';
  if (score >= 60) return '60-79%';
  if (score >= 40) return '40-59%';
  return '0-39%';
};

// Add some sample data for demonstration
export const addSampleData = () => {
  if (anonymousResults.length === 0) {
    const sampleResults = [
      { score: 85, category: 'Donor-Centered Champion', sharedBy: 'John Smith' },
      { score: 72, category: 'Relationship Builder', sharedBy: 'Sarah Johnson' },
      { score: 45, category: 'Transitioning Fundraiser' },
      { score: 91, category: 'Donor-Centered Champion', sharedBy: 'John Smith' },
      { score: 38, category: 'Organization-Centered Approach' },
      { score: 67, category: 'Relationship Builder', sharedBy: 'Mike Davis' },
    ];
    
    sampleResults.forEach((sample, index) => {
      const result: AnonymousResult = {
        id: uuidv4(),
        timestamp: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)), // Spread over days
        score: sample.score,
        scoreCategory: sample.category,
        answers: {}, // Empty for sample data
        sharedBy: sample.sharedBy,
        userAgent: 'Sample Data',
      };
      anonymousResults.push(result);
    });
  }
};