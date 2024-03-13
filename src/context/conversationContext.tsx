'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

export interface IConversationData {
  topic: string;
  title: string;
  words: number;
}

interface IConversationTopicContext {
  conversationData: IConversationData;
  setConversationData: React.Dispatch<React.SetStateAction<IConversationData>>;
}

const ConversationTopicDataContext = createContext<IConversationTopicContext>({
  conversationData: {
    topic: '',
    title: '',
    words: 100,
  },
  setConversationData: () => {},
});

export const useConversationData = () =>
  useContext(ConversationTopicDataContext);

export const ConversationTopicDataProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [conversationData, setConversationData] = useState<IConversationData>({
    topic: '',
    title: '',
    words: 100,
  });

  return (
    <ConversationTopicDataContext.Provider
      value={{ conversationData, setConversationData }}>
      {children}
    </ConversationTopicDataContext.Provider>
  );
};
