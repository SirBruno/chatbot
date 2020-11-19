import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

export default function TotalService(props) {

  let formatNum = (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1");

  const [logoData, setLogoData] = useState(0);
  const [designData, setDesignData] = useState(0);

  if (props.ecommerce) {

  } else {
    if (props.quoteData.steps[13].message === 'Não') {
      if ((props.quoteData.steps[18].message === 'Sim') && (!logoData)) {
        setLogoData(4000.00)
      }
    }

    if (props.quoteData.steps[9].message === 'Não') {
      if ((props.quoteData.steps[11].message === 'Sim') && (!designData)) {
        setDesignData(2700.00)
      }
    }
  }

  $('.money').mask('000.000.000.000.000,00', { reverse: true });

  return (
    props.ecommerce ?
      <p className="quoteFinalVal"><b>Total</b>: <span>
        R$ <span className="money">{
          formatNum(props.ecommercePrice + props.prodPrice)
        }</span>
      </span></p> :
      <p className="quoteFinalVal"><b>Total</b>: <span>
        R$ <span className="money">{
          formatNum(props.websitePrice + props.pgsPrice + logoData + designData)
        }</span>
      </span></p>
  )
}