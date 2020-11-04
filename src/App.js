import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import botImg from './assets/botImg.png';

function App() {

  // const [lastMsg, setLastMsg] = useState(null);
  // const [quote, setQuote] = useState({ graphicDesign: 0 });

  return (
    <div className="App">
      {/* <p>{lastMsg}</p> */}
      <ChatBot width="600px" botAvatar={botImg}
        steps={[
          {
            id: '1',
            message: 'Olá, como posso ajudar?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Orçamento', trigger: '5' },
              { value: 2, label: 'Serviços', trigger: '6' },
              { value: 3, label: 'Valores', trigger: '3' },
            ],
            trigger: '2',
          },
          {
            id: '3',
            component: (
              <div>
                <div><b>Site institucional (5 pg.):</b><br />R$ 3.000 + R$ 300 p/ página</div>
                <br />
                <div><b>E-commerce (100 prod.):</b><br />R$ 7.000 + R$ 10 p/ produto</div>
                <br />
                <div><b>Landing page:</b><br />R$ 1.400</div>
              </div>
            ),
            trigger: '2',
          },
          {
            id: '4',
            user: true,
            trigger: '3',
          },
          {
            id: '5',
            message: 'Seu site precisa de funcionalidades que o WordPress não possui nativamente?',
            // message: ({ previousValue, steps }) => {
            //   console.log(previousValue);
            //   if (previousValue.toLowerCase() === 'bruno') {
            //     return `Em que posso ajudar, mestre?`
            //   } else if (previousValue.includes('vegano')) {
            //     return `Vegano é meu ovo`
            //   } else if (previousValue.includes('time')) {
            //     return `Eu nem assisto futebol parcero`
            //   } else if (previousValue.includes('tudo bem?')) {
            //     return `Sim, e vc?`
            //   } else if (previousValue.toLowerCase() === 'tudo') {
            //     return `legal`
            //   } else return `fodase kkkkkkkk`
            // },
            trigger: '17'
          },
          {
            id: '17',
            options: [
              { value: 1, label: 'Sim', trigger: '5' },
              { value: 2, label: 'Não', trigger: '7' },
              { value: 3, label: 'Não sei dizer', trigger: '16' },
            ],
            trigger: '17'
          },
          {
            id: '16',
            message: 'Se o seu site precisa de funcionalidades que exigem programação avançada, como um sistema de login customizado, meios de pagamento não presentes no WooCommerce, integrações que não podem ser feitas por meio de plugins já existentes na loja, ou qualquer coisa que envolva muito código, nós não poderemos te ajudar, uma vez que não trabalhamos com desenvolvimento de software. Esse é o caso do seu site?',
            trigger: '15'
          },
          {
            id: '15',
            options: [
              { value: 1, label: 'Sim', trigger: '8' },
              { value: 2, label: 'Não', trigger: '7' }
            ]
          },
          {
            id: '8',
            message: 'Desculpe, infelizmente não poderemos te ajudar.',
            trigger: '2'
          },
          {
            id: '7',
            message: 'O site já possui design (mockup, protótipo ou stylescape)?',
            trigger: '9'
          },
          {
            id: '9',
            options: [
              { value: 1, label: 'Sim', trigger: '8' },
              { value: 2, label: 'Não', trigger: '10' }
            ]
          },
          {
            id: '10',
            message: 'Deseja contratar um serviço de design gráfico para a criação do design?',
            trigger: '11'
          },
          {
            id: '11',
            options: [
              { value: 1, label: 'Sim', trigger: '12' },
              { value: 2, label: 'Não', trigger: '12' }
            ]
          },
          {
            id: '12',
            message: 'Sua marca já possui logo?',
            trigger: '13'
          },
          {
            id: '13',
            options: [
              { value: 1, label: 'Sim', trigger: '12' },
              { value: 2, label: 'Não', trigger: '14' }
            ]
          },
          {
            id: '14',
            message: 'Deseja contratar um serviço de criação de logo?',
            trigger: '18'
          },
          {
            id: '18',
            options: [
              { value: 1, label: 'Sim', trigger: '12' },
              { value: 2, label: 'Não', trigger: '14' }
            ]
          },
          {
            id: '6',
            component: (
              <div>
                <div><b>Nossos serviços</b></div>
                <div>Nós ofereçemos serviços de desenvolvimento web e design gráfico.</div>
              </div>
            ),
            trigger: '14'
          }
        ]}
      />
    </div>
  );
}

export default App;
