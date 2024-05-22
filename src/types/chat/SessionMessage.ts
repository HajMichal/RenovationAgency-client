/* This is the type of message received by socketio  */
export interface SessionMessage {
  id: number;
  body: string;
  read: boolean;
  createdAt: Date;
  senderId: number;
  conversationId: number;
}
