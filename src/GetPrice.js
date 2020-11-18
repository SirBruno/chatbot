import React from 'react'

export default function GetPrice(props) {

  props.maskMoney();

  console.log(props.steps)

  return (
    <div>
      <div><b>Site institucional (10 pg.):</b><br />R$ <span className="money">{props.websitePrice}</span> + R$ <span className="money">{props.pagePrice}</span> p/ página</div>
      <br />
      <div><b>E-commerce (100 prod.):</b><br />R$ 7.000 + R$ 10 p/ produto</div>
      <br />
      <div><b>Landing page:</b><br />R$ 1.400</div>
    </div>
  )
}