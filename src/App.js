import React, { useState } from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import botImg from './assets/botImg.png';

function App() {

  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <p>{value}</p>
      <ChatBot width="400px" botAvatar={botImg}
        steps={[
          {
            id: '1',
            message: 'Qual a boa de hoje, chefe?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: ({ previousValue, steps }) => {
              console.log(previousValue);
              if (previousValue.toLowerCase() === 'bruno') {
                return `Em que posso ajudar, mestre?`
              } else if (previousValue.includes('vegano')) {
                return `Vegano é meu ovo`
              } else if (previousValue.includes('time')) {
                return `Eu nem assisto futebol parcero`
              } else if (previousValue.includes('tudo bem?')) {
                return `Sim, e vc?`
              } else if (previousValue.toLowerCase() === 'tudo') {
                return `legal`
              } else return `fodase kkkkkkkk`
            },
            trigger: '2'
          }
        ]}
      />
    </div>
  );
}

export default App;
