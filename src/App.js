import React, { useState } from 'react';
import LogoService from './LogoService';
import TotalService from './TotalService';
import DesignService from './DesignService';
import GetPrice from './GetPrice';
import utils from './utils';
import './assets/styles/App.css'
import ChatBot from 'react-simple-chatbot';
import botImg from './assets/botImg.png';
import 'jquery-mask-plugin/dist/jquery.mask.min';

utils.maskMoney();

function Quote(props) {

  const [pgsPrice, setPgsPrice] = useState(0);
  const [prodPrice, setProdPrice] = useState(0);
  const [landingPagePrice, setLandingPagePrice] = useState(0);

  if (props.ecommerce) {
    if ((props.steps[27].message > 100) && prodPrice === 0) {
      setProdPrice((props.steps[27].message - 100) * utils.prodPrice);
    }
  } else if (props.landingPage) {
    if (landingPagePrice === 0) {
      setLandingPagePrice(utils.landingPagePrice)
    }
  } else {
    if ((props.steps[20].message > 10) && pgsPrice === 0) {
      setPgsPrice((props.steps[20].message - 10) * utils.pagePrice);
    }
  }

  utils.maskMoney();

  if (props.ecommerce) {
    return <div>
      <p><b>E-commerce (base de preço)</b>: R$ <span className="money">{utils.formatNum(utils.ecommercePrice)}</span></p>
      <p><b>Produtos (x{props.steps[27].message})</b>: R$ <span className="money">{utils.formatNum(prodPrice)}</span></p>
      <TotalService ecommerce={true} ecommercePrice={utils.ecommercePrice} prodPrice={prodPrice} pgsPrice={pgsPrice} websitePrice={utils.websitePrice} quoteData={props} />
    </div>
  } else if (props.landingPage) {
    return <div>
      <p><b>Landing page (base de preço)</b>: R$ <span className="money">{utils.formatNum(utils.landingPagePrice)}</span></p>
      <TotalService landingPage={true} landingPagePrice={utils.landingPagePrice} quoteData={props} />
    </div>
  } else {
    return <div>
      <p><b>Website (base de preço)</b>: R$ <span className="money">{utils.formatNum(utils.websitePrice)}</span></p>
      <p><b>Páginas (x{props.steps[20].message})</b>: R$ <span className="money">{utils.formatNum(pgsPrice)}</span></p>
      <DesignService quoteData={props} />
      <LogoService quoteData={props} />
      <TotalService pgsPrice={pgsPrice} websitePrice={utils.websitePrice} quoteData={props} />
    </div>
  }
}

function App(props) {

  // const [personName, setPersonName] = useState(null);
  // const [quote, setQuote] = useState({ graphicDesign: 0 });

  return (
    <div className="App">
      {/* <p>{lastMsg}</p> */}
      <ChatBot width="600px" botAvatar={botImg}
        steps={[
          {
            id: '30',
            message: 'Olá, qual o seu nome?',
            trigger: '31',
          },
          {
            id: '31',
            user: true,
            trigger: '1',
          },
          {
            id: '1',
            message: ({ previousValue }) => {
              return `É um prazer atendê-lo ${utils.formatPersonName(previousValue)}, como posso ajudar?`
            },
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Orçamento', trigger: '5' },
              { value: 2, label: 'Serviços', trigger: '6' },
              { value: 3, label: 'Valores', trigger: '3' },
              { value: 4, label: 'Contato', trigger: '34' },
            ]
          },
          {
            id: '34',
            message: 'O contato ocorrerá por telefone ou email?',
            trigger: '35',
          },
          {
            id: '35',
            options: [
              { value: 1, label: 'Telefone', trigger: '36' },
              { value: 2, label: 'Email', trigger: '42' }
            ]
          },
          {
            id: '42',
            message: 'Anote aí, vendas@mail.com. Podemos lhe auxiliar em algo mais?',
            trigger: '2',
          },
          {
            id: '36',
            message: 'Prefere nos ligar ou deseja que entremos em contato?',
            trigger: '37',
          },
          {
            id: '37',
            options: [
              { value: 1, label: 'Quero entrar em contato', trigger: '38' },
              { value: 2, label: 'Prefiro que me liguem', trigger: '39' }
            ]
          },
          {
            id: '38',
            message: 'Anote aí, (19) 2545-4838 / 98669-4214. Podemos lhe auxiliar em algo mais?',
            trigger: '2'
          },
          {
            id: '39',
            message: 'Por favor, informe o seu número com DDD.',
            trigger: '40',
          },
          {
            id: '40',
            user: true,
            trigger: '41',
          },
          {
            id: '41',
            message: 'Já anotamos aqui. Entraremos em contato durante nosso horário comercial dentro dos próximos dias. Podemos lhe auxiliar em algo mais?',
            trigger: '2',
          },
          {
            id: '3',
            component: <GetPrice steps={props.steps} ecommercePrice={utils.formatNum(utils.ecommercePrice)} landingPagePrice={utils.formatNum(utils.landingPagePrice)} prodPrice={utils.formatNum(utils.prodPrice)} pagePrice={utils.formatNum(utils.pagePrice)} maskMoney={utils.maskMoney} websitePrice={utils.formatNum(utils.websitePrice)} />,
            trigger: '2',
          },
          {
            id: '4',
            user: true,
            trigger: '3',
          },
          {
            id: '5',
            message: 'De qual serviço você precisa?',
            trigger: '22'
          },
          {
            id: '22',
            options: [
              { value: 1, label: 'Site institucional', trigger: '23' },
              { value: 2, label: 'E-commerce', trigger: '24' },
              { value: 3, label: 'Landing page', trigger: '29' }
            ]
          },
          {
            id: '23',
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
            id: '24',
            message: 'Qual plataforma de e-commerce deseja usar?',
            trigger: '25'
          },
          {
            id: '25',
            options: [
              { value: 1, label: 'WooCommerce', trigger: '26' },
              { value: 2, label: 'Shopify', trigger: '26' },
              { value: 3, label: 'Loja integrada', trigger: '26' },
              { value: 4, label: 'VTEX', trigger: '26' },
            ]
          },
          {
            id: '26',
            message: 'Quantos produtos deseja cadastrar na loja?',
            trigger: '27'
          },
          {
            id: '27',
            user: true,
            trigger: '28',
          },
          {
            id: '28',
            component: <Quote ecommerce={true} steps={props.steps} />,
            trigger: '2'
          },
          {
            id: '29',
            component: <Quote landingPage={true} steps={props.steps} />,
            trigger: '2'
          },
          {
            id: '17',
            options: [
              { value: 1, label: 'Sim', trigger: '8' },
              { value: 2, label: 'Não', trigger: '7' },
              { value: 3, label: 'Não sei dizer', trigger: '16' },
            ]
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
              { value: 1, label: 'Sim', trigger: '12' },
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
              { value: 1, label: 'Sim', trigger: '19' },
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
              { value: 1, label: 'Sim', trigger: '19' },
              { value: 2, label: 'Não', trigger: '19' }
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
            trigger: '2'
          },
          {
            id: '19',
            message: 'Quantas páginas o site vai ter?',
            trigger: '20'
          },
          {
            id: '20',
            user: true,
            trigger: '21',
          },
          {
            id: '21',
            component: <Quote />,
            trigger: '2'
          },
        ]}
      />
    </div>
  );
}

export default App;
