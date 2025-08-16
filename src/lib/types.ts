export type Role = 'marketer' | 'programmer' | 'writer' | 'speaker';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
