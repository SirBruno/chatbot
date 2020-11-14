import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

export default function DesignService(props) {

  let formatNum = (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1");

  const [designData, setDesignData] = useState(0);

  if (props.quoteData.steps[9].message === 'Não') {
    if ((props.quoteData.steps[11].message === 'Sim') && (!designData)) {
      setDesignData(2700.00)
    }
  }

  $('.money').mask('000.000.000.000.000,00', { reverse: true });

  return (
    <p>
      <b>Serviço de design</b>: {
        !designData ? 'Não contratado' : <span>
          R$ <span className="money">{
            formatNum(designData)
          }</span>
        </span>
      }
    </p>
  )
}