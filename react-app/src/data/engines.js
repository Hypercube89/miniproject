export const quotes = [
  'Knowledge grows when shared.',
  'Search smart, not hard.',
  'Learning never stops.',
  'Curiosity drives innovation.',
  'Explore. Learn. Improve.',
]

export const engineContent = {
  google: {
    slug: 'google',
    name: 'Google',
    title: 'Google Search Engine',
    description:
      'Google is the most popular search engine in the world. It helps users find information on the internet quickly using keywords, images, and voice search.',
    features: [
      'Fast and accurate search results',
      'Voice and image search',
      'Advanced search operators',
      'Integration with Google tools like Gmail and Maps',
    ],
    advantages:
      'Google provides highly relevant results using artificial intelligence and machine learning. It is easy to use and supports multiple languages.',
    howItWorksTitle: 'How Google works?',
    icon: '/images/google.jpeg',
    workImages: {
      crawling: '/images/crawling.png',
      indexing: '/images/indexing.png',
      ranking: '/images/ranking.png',
    },
    assessment: {
      title: 'Google Assessment',
      questions: [
        {
          id: 'q1',
          prompt: 'Google was founded in which year?',
          options: ['1995', '1998', '2001', '2005'],
          answer: '1998',
        },
        {
          id: 'q2',
          prompt: 'Which symbol is used for exact phrase search?',
          options: ['site:', 'intitle:', '" "', 'filetype:'],
          answer: '" "',
        },
        {
          id: 'q3',
          prompt: 'Which is NOT a Google service?',
          options: ['Gmail', 'Google Drive', 'Bing', 'Google Maps'],
          answer: 'Bing',
        },
        {
          id: 'q4',
          prompt: 'Google Meet is used for?',
          options: ['Email', 'Video meetings', 'Cloud storage', 'Searching'],
          answer: 'Video meetings',
        },
        {
          id: 'q5',
          prompt: 'Google Search uses mainly?',
          options: [
            'Artificial Intelligence',
            'Manual search',
            'Offline database',
            'Human sorting',
          ],
          answer: 'Artificial Intelligence',
        },
      ],
      descriptive: [
        'Explain any two features of Google Search.',
        'What are Google search operators? Give an example.',
      ],
    },
  },
  bing: {
    slug: 'bing',
    name: 'Bing',
    title: 'Bing Search Engine',
    description:
      'Bing is a search engine developed by Microsoft. It provides web search, image search, video search, and map services to users.',
    features: [
      'Developed and maintained by Microsoft',
      'Integrated with Microsoft Edge browser',
      'Provides Bing Rewards for searches',
      'Strong image and video search features',
    ],
    advantages:
      'Bing offers a visually rich search experience and rewards users for searching. It is well integrated with Microsoft products like Windows and Edge.',
    howItWorksTitle: 'How Bing works?',
    icon: '/images/bing.jpeg',
    workImages: {
      crawling: '/images/bing_crawling.png',
      indexing: '/images/bing_indexing.png',
      ranking: '/images/bing_ranking.png',
    },
    assessment: {
      title: 'Bing Assessment',
      questions: [
        {
          id: 'q1',
          prompt: 'Bing is developed by which company?',
          options: ['Google', 'Microsoft', 'Apple', 'Amazon'],
          answer: 'Microsoft',
        },
        {
          id: 'q2',
          prompt: 'Bing was launched in which year?',
          options: ['2005', '2009', '2012', '2015'],
          answer: '2009',
        },
        {
          id: 'q3',
          prompt: 'Bing is the default search engine in which browser?',
          options: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Edge', 'Safari'],
          answer: 'Microsoft Edge',
        },
        {
          id: 'q4',
          prompt: 'Bing Rewards are mainly given for?',
          options: ['Searching', 'Emailing', 'Uploading files', 'Watching movies'],
          answer: 'Searching',
        },
        {
          id: 'q5',
          prompt: 'Bing is mainly known for which feature?',
          options: ['Rewards program', 'Offline searching', 'No internet usage', 'Only image search'],
          answer: 'Rewards program',
        },
      ],
      descriptive: [
        'What is Bing search engine?',
        'Mention two advantages of Bing over other search engines.',
      ],
    },
  },
  duckduckgo: {
    slug: 'duckduckgo',
    name: 'DuckDuckGo',
    title: 'DuckDuckGo Search Engine',
    description:
      'DuckDuckGo is a privacy-focused search engine. It does not track user searches or store personal information, making it popular among privacy-conscious users.',
    features: [
      'Does not track users or store personal data',
      'Provides anonymous searching',
      'Simple and clean user interface',
      'Blocks trackers by default',
    ],
    advantages:
      'DuckDuckGo protects user privacy and prevents personalized tracking. It is a good alternative for users who want secure and private searching.',
    howItWorksTitle: 'How DuckDuckGo works?',
    icon: '/images/ddg.png',
    workImages: {
      crawling: '/images/ddg_crawling.png',
      indexing: '/images/ddg_indexing.png',
      ranking: '/images/ddg_ranking.png',
    },
    assessment: {
      title: 'DuckDuckGo Assessment',
      questions: [
        {
          id: 'q1',
          prompt: 'DuckDuckGo mainly focuses on?',
          options: ['Ads', 'Privacy', 'Games', 'Email service'],
          answer: 'Privacy',
        },
        {
          id: 'q2',
          prompt: 'DuckDuckGo does not track?',
          options: ['Searches', 'Personal data', 'IP Address', 'All of the above'],
          answer: 'All of the above',
        },
        {
          id: 'q3',
          prompt: 'DuckDuckGo is best described as a?',
          options: ['Search Engine', 'Web Browser only', 'Social media platform', 'Email service'],
          answer: 'Search Engine',
        },
        {
          id: 'q4',
          prompt: 'DuckDuckGo is popular because it provides?',
          options: ['Faster Wi-Fi', 'Anonymous searching', 'Free games', 'Cloud storage'],
          answer: 'Anonymous searching',
        },
        {
          id: 'q5',
          prompt: 'Which is a unique feature of DuckDuckGo?',
          options: ['Personalized ads', 'No user tracking', 'Paid searching', 'Offline mode only'],
          answer: 'No user tracking',
        },
      ],
      descriptive: [
        'What is DuckDuckGo and why is it popular?',
        'Compare DuckDuckGo and Google in terms of privacy.',
      ],
    },
  },
}

export const engineList = ['google', 'bing', 'duckduckgo']
