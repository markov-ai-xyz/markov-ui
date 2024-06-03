import React, { useEffect, useRef } from 'react';
import renderWidget, { createChatBotMessage } from 'markov-ai';
import 'markov-ai/index.css';

const Markov = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (rootRef.current) {
      const config = {
        apiKey: "mdp-markov-ai",
        botName: "Markov",
        initialMessages: [
          createChatBotMessage('Hello there! How can I help you?', { widget: "" }),
        ],
        state: {},
        widgets: [],
      };

      renderWidget(rootRef.current, config);

      return () => { 
        localStorage.removeItem('markovJwt');
      };
    }
  }, []);

  return <div ref={rootRef} className="markov-ai-widget"></div>;
};

export default Markov;
