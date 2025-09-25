export interface AssessmentOption {
  value: string;
  text: string;
  description?: string;
  score: number;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  description?: string;
  options: AssessmentOption[];
  category: 'approach' | 'listening' | 'relationship' | 'strategy';
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "When you first meet a potential donor, what do you typically start with?",
    description: "Think about your usual opening conversation in a first meeting.",
    category: 'approach',
    options: [
      {
        value: 'organization',
        text: "Tell them about your organization and its needs",
        description: "Start with your mission, programs, and funding requirements",
        score: 1
      },
      {
        value: 'ask_interests',
        text: "Ask about their interests and what matters to them",
        description: "Show curiosity about their passions and values first",
        score: 5
      },
      {
        value: 'mixed',
        text: "Brief organization intro, then ask about their interests",
        description: "Combine both approaches in the conversation",
        score: 3
      },
      {
        value: 'unsure',
        text: "I'm not sure - it varies depending on the situation",
        description: "No consistent approach to opening conversations",
        score: 2
      }
    ]
  },
  {
    id: 2,
    question: "How do you typically respond when someone shares their personal experiences or interests?",
    description: "Consider your natural reaction when donors open up about what they care about.",
    category: 'listening',
    options: [
      {
        value: 'connect_org',
        text: "Immediately connect it to how your organization addresses that issue",
        description: "Quick to make the link to your programs and services",
        score: 2
      },
      {
        value: 'ask_more',
        text: "Ask follow-up questions to understand their perspective better",
        description: "Show genuine curiosity and let them share more",
        score: 5
      },
      {
        value: 'acknowledge_pivot',
        text: "Acknowledge their interest, then pivot to your organization",
        description: "Brief recognition before steering to your agenda",
        score: 3
      },
      {
        value: 'listen_wait',
        text: "Listen carefully and wait for natural opportunities to connect",
        description: "Patient approach, letting connections emerge organically",
        score: 4
      }
    ]
  },
  {
    id: 3,
    question: "What questions do you find most effective in donor conversations?",
    description: "Think about the questions that generate the most meaningful responses.",
    category: 'strategy',
    options: [
      {
        value: 'giving_capacity',
        text: "Questions about their giving capacity and preferences",
        description: "Focus on donation amounts and giving history",
        score: 2
      },
      {
        value: 'personal_connection',
        text: "Questions about their personal connection to the cause",
        description: "What first got you interested in this issue?",
        score: 5
      },
      {
        value: 'org_programs',
        text: "Questions about which of your programs interest them most",
        description: "Present options and ask for their preferences",
        score: 3
      },
      {
        value: 'impact_vision',
        text: "Questions about what impact they'd most like to see",
        description: "What would make the biggest difference in your view?",
        score: 4
      }
    ]
  },
  {
    id: 4,
    question: "How do you handle it when a donor seems hesitant or unengaged?",
    description: "Your approach when conversations aren't flowing naturally.",
    category: 'relationship',
    options: [
      {
        value: 'push_harder',
        text: "Present more compelling information about your organization",
        description: "Share more statistics, stories, and urgent needs",
        score: 1
      },
      {
        value: 'step_back',
        text: "Step back and ask what's really important to them",
        description: "Shift focus entirely to their interests and concerns",
        score: 5
      },
      {
        value: 'different_angle',
        text: "Try a different angle or program that might interest them",
        description: "Present alternative ways they could get involved",
        score: 3
      },
      {
        value: 'end_gracefully',
        text: "Acknowledge it might not be the right fit and end gracefully",
        description: "Respect their position and maintain the relationship",
        score: 4
      }
    ]
  },
  {
    id: 5,
    question: "What do you believe is the most important factor in successful fundraising?",
    description: "Your core philosophy about what makes fundraising work.",
    category: 'approach',
    options: [
      {
        value: 'compelling_case',
        text: "Having a compelling case for support",
        description: "Strong organizational story and clear needs",
        score: 2
      },
      {
        value: 'genuine_relationships',
        text: "Building genuine relationships based on shared values",
        description: "Authentic connections that go beyond transactions",
        score: 5
      },
      {
        value: 'right_timing',
        text: "Finding the right timing and approach for each donor",
        description: "Strategic timing and personalized cultivation",
        score: 4
      },
      {
        value: 'clear_impact',
        text: "Demonstrating clear, measurable impact",
        description: "Concrete results and accountability",
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: "How often do you find yourself talking versus listening in donor meetings?",
    description: "Be honest about the typical balance in your conversations.",
    category: 'listening',
    options: [
      {
        value: 'mostly_talking',
        text: "I do most of the talking - sharing information and making the case",
        description: "60-80% talking, presenting organizational information",
        score: 1
      },
      {
        value: 'balanced',
        text: "It's fairly balanced - we both share equally",
        description: "50/50 split between talking and listening",
        score: 3
      },
      {
        value: 'mostly_listening',
        text: "I do more listening - asking questions and learning about them",
        description: "60-80% listening, focusing on their perspectives",
        score: 5
      },
      {
        value: 'varies',
        text: "It varies greatly depending on the donor and situation",
        description: "No consistent pattern in conversation balance",
        score: 2
      }
    ]
  },
  {
    id: 7,
    question: "When do you typically bring up specific funding needs or donation amounts?",
    description: "The timing of your financial asks in the relationship.",
    category: 'strategy',
    options: [
      {
        value: 'early_meeting',
        text: "Early in the first or second meeting",
        description: "Get the financial conversation started quickly",
        score: 2
      },
      {
        value: 'after_connection',
        text: "After establishing a connection to their interests",
        description: "Wait until you understand what motivates them",
        score: 5
      },
      {
        value: 'when_asked',
        text: "When they ask about ways to get involved",
        description: "Let them initiate the conversation about giving",
        score: 4
      },
      {
        value: 'formal_proposal',
        text: "In a formal proposal after several meetings",
        description: "Follow a structured cultivation timeline",
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: "What's your primary goal for a first meeting with a potential major donor?",
    description: "What you most hope to accomplish in that initial conversation.",
    category: 'relationship',
    options: [
      {
        value: 'secure_gift',
        text: "Secure a significant gift or commitment",
        description: "Make the ask and close the deal",
        score: 1
      },
      {
        value: 'understand_interests',
        text: "Understand their interests and motivations",
        description: "Learn what they care about and why",
        score: 5
      },
      {
        value: 'present_opportunities',
        text: "Present various giving opportunities",
        description: "Show them different ways to get involved",
        score: 2
      },
      {
        value: 'build_rapport',
        text: "Build rapport and schedule a follow-up meeting",
        description: "Establish relationship foundation for future conversations",
        score: 4
      }
    ]
  }
];

export const calculateScore = (answers: Record<number, string>): number => {
  let totalScore = 0;
  let answeredQuestions = 0;

  Object.entries(answers).forEach(([questionIndex, answerValue]) => {
    const question = assessmentQuestions[parseInt(questionIndex)];
    const selectedOption = question.options.find(option => option.value === answerValue);
    if (selectedOption) {
      totalScore += selectedOption.score;
      answeredQuestions++;
    }
  });

  return answeredQuestions > 0 ? Math.round((totalScore / (answeredQuestions * 5)) * 100) : 0;
};

export const getScoreCategory = (score: number): {
  category: string;
  title: string;
  description: string;
  color: string;
} => {
  if (score >= 80) {
    return {
      category: 'excellent',
      title: 'Donor-Centered Champion',
      description: 'You have mastered the art of donor-centered fundraising. You consistently start with curiosity about your donors and build genuine relationships.',
      color: 'text-green-600'
    };
  } else if (score >= 60) {
    return {
      category: 'good',
      title: 'Relationship Builder',
      description: 'You understand the importance of donor relationships and often put their interests first. With some refinement, you can become even more effective.',
      color: 'text-blue-600'
    };
  } else if (score >= 40) {
    return {
      category: 'developing',
      title: 'Transitioning Fundraiser',
      description: 'You are beginning to shift from organization-centered to donor-centered approaches. Focus on asking more questions and listening more deeply.',
      color: 'text-yellow-600'
    };
  } else {
    return {
      category: 'needs_improvement',
      title: 'Organization-Centered Approach',
      description: 'You tend to lead with your organization\'s needs rather than donor interests. Learning to start with curiosity will transform your fundraising success.',
      color: 'text-red-600'
    };
  }
};