import { Member, Chat, Message } from '../types/chat';

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'admin',
    status: 'online',
    joinedAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Alice Cooper',
    role: 'admin',
    status: 'offline',
    joinedAt: '2024-01-15'
  },
  {
    id: '3',
    name: 'Bob Wilson',
    role: 'member',
    status: 'online',
    joinedAt: '2024-02-01'
  },
  {
    id: '4',
    name: 'Carol Smith',
    role: 'member',
    status: 'offline',
    joinedAt: '2024-02-15'
  }
];

export const mockChats: Chat[] = [
  {
    id: 'group-1',
    type: 'group',
    name: 'E-commerce Platform Team',
    lastMessage: 'Updated the payment gateway implementation',
    timestamp: '2024-03-15T10:30:00',
    unread: 3,
    memberCount: 4,
    projectId: 'project-1',
    description: 'Official group for the E-commerce Platform project team',
    createdAt: '2024-01-15',
    members: mockMembers
  },
  {
    id: 'direct-1',
    type: 'direct',
    name: 'Alice Cooper',
    lastMessage: 'Can you review the latest changes?',
    timestamp: '2024-03-15T09:45:00',
    unread: 1
  },
  {
    id: 'group-2',
    type: 'group',
    name: 'Marketing Campaign Team',
    lastMessage: 'New content calendar is ready for review',
    timestamp: '2024-03-14T16:20:00',
    unread: 0,
    memberCount: 3,
    projectId: 'project-2',
    description: 'Marketing Campaign project coordination group',
    createdAt: '2024-02-01',
    members: mockMembers.slice(0, 3)
  },
  {
    id: 'direct-2',
    type: 'direct',
    name: 'Bob Wilson',
    lastMessage: 'The API documentation is complete',
    timestamp: '2024-03-14T15:30:00',
    unread: 2
  }
];

// Mock messages for each chat
export const mockChatMessages: Record<string, Message[]> = {
  'group-1': [
    {
      id: 'msg1-1',
      content: 'Hey team! I\'ve updated the payment gateway implementation.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T10:30:00'
    },
    {
      id: 'msg1-2',
      content: 'Great work! I\'ll review it shortly.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-15T10:32:00'
    },
    {
      id: 'msg1-3',
      content: 'Don\'t forget to update the documentation as well.',
      senderName: 'Carol Smith',
      timestamp: '2024-03-15T10:35:00'
    },
    {
      id: 'msg1-4',
      content: 'I\'ll handle the documentation updates.',
      senderName: 'John Smith',
      timestamp: '2024-03-15T10:37:00'
    },
    {
      id: 'msg1-5',
      content: 'The test cases are passing successfully.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T10:40:00'
    },
    {
      id: 'msg1-6',
      content: 'Should we schedule a demo for the client?',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-15T10:42:00'
    },
    {
      id: 'msg1-7',
      content: 'Yes, let\'s plan for tomorrow afternoon.',
      senderName: 'John Smith',
      timestamp: '2024-03-15T10:45:00'
    },
    {
      id: 'msg1-8',
      content: 'I\'ll send out the calendar invites.',
      senderName: 'Carol Smith',
      timestamp: '2024-03-15T10:47:00'
    }
  ],
  'direct-1': [
    {
      id: 'msg2-1',
      content: 'Hi Alice, can you review the latest changes?',
      senderName: 'John Smith',
      timestamp: '2024-03-15T09:30:00'
    },
    {
      id: 'msg2-2',
      content: 'Sure, I\'ll take a look right away.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T09:32:00'
    },
    {
      id: 'msg2-3',
      content: 'The new UI components look great!',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T09:35:00'
    },
    {
      id: 'msg2-4',
      content: 'Thanks! Any suggestions for improvements?',
      senderName: 'John Smith',
      timestamp: '2024-03-15T09:37:00'
    },
    {
      id: 'msg2-5',
      content: 'Maybe we could add some animations.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T09:40:00'
    },
    {
      id: 'msg2-6',
      content: 'Good idea, I\'ll work on that.',
      senderName: 'John Smith',
      timestamp: '2024-03-15T09:42:00'
    },
    {
      id: 'msg2-7',
      content: 'Let me know when it\'s ready for another review.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-15T09:45:00'
    },
    {
      id: 'msg2-8',
      content: 'Will do, thanks for the feedback!',
      senderName: 'John Smith',
      timestamp: '2024-03-15T09:47:00'
    }
  ],
  'group-2': [
    {
      id: 'msg3-1',
      content: 'The new content calendar is ready for review.',
      senderName: 'Carol Smith',
      timestamp: '2024-03-14T16:00:00'
    },
    {
      id: 'msg3-2',
      content: 'Great timing! Let\'s discuss the social media strategy.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-14T16:05:00'
    },
    {
      id: 'msg3-3',
      content: 'I\'ve prepared some hashtag suggestions.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T16:08:00'
    },
    {
      id: 'msg3-4',
      content: 'Perfect, share them with the team.',
      senderName: 'Carol Smith',
      timestamp: '2024-03-14T16:10:00'
    },
    {
      id: 'msg3-5',
      content: 'Here\'s the list of trending hashtags we can use.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T16:12:00'
    },
    {
      id: 'msg3-6',
      content: 'These look promising for our campaign.',
      senderName: 'Alice Cooper',
      timestamp: '2024-03-14T16:15:00'
    },
    {
      id: 'msg3-7',
      content: 'Should we start with Instagram or Twitter?',
      senderName: 'Carol Smith',
      timestamp: '2024-03-14T16:18:00'
    },
    {
      id: 'msg3-8',
      content: 'Let\'s focus on Instagram first.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T16:20:00'
    }
  ],
  'direct-2': [
    {
      id: 'msg4-1',
      content: 'Hi Bob, how\'s the API documentation coming along?',
      senderName: 'John Smith',
      timestamp: '2024-03-14T15:00:00'
    },
    {
      id: 'msg4-2',
      content: 'Just finished the last section!',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T15:05:00'
    },
    {
      id: 'msg4-3',
      content: 'Excellent! Can you share the link?',
      senderName: 'John Smith',
      timestamp: '2024-03-14T15:10:00'
    },
    {
      id: 'msg4-4',
      content: 'Here you go: [API Documentation Link]',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T15:15:00'
    },
    {
      id: 'msg4-5',
      content: 'This looks very comprehensive!',
      senderName: 'John Smith',
      timestamp: '2024-03-14T15:20:00'
    },
    {
      id: 'msg4-6',
      content: 'Thanks! I added some examples too.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T15:25:00'
    },
    {
      id: 'msg4-7',
      content: 'Perfect, this will help the team a lot.',
      senderName: 'John Smith',
      timestamp: '2024-03-14T15:28:00'
    },
    {
      id: 'msg4-8',
      content: 'Let me know if anything needs updating.',
      senderName: 'Bob Wilson',
      timestamp: '2024-03-14T15:30:00'
    }
  ]
};