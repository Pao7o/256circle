export interface Member {
  id: string;
  name: string;
  role: 'admin' | 'member';
  status: 'online' | 'offline';
  joinedAt: string;
}

export interface GroupChat {
  id: string;
  type: 'group';
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  memberCount: number;
  projectId: string;
  description: string;
  createdAt: string;
  members: Member[];
}

export interface DirectChat {
  id: string;
  type: 'direct';
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export type Chat = GroupChat | DirectChat;

export interface Message {
  id: string;
  content: string;
  senderName: string;
  timestamp: string;
}