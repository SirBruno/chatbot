import React, { useState } from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {

  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <p>{ value }</p>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Qual o seu nome?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: ({ previousValue, steps }) => {console.log(previousValue);
              if(previousValue.toLowerCase() === 'bruno') {
              return `Em que posso ajudar, mestre?`
            } else return `fodase kkkkkkkk`},
            end: true,
          }
        ]}
      />
    </div>
  );
}

export default App;
