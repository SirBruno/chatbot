import $ from 'jquery';

const utils = {
  maskMoney: () => {
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
  },
  formatNum: (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1"),
  formatPersonName: (name) => name.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()),
  websitePrice: 5000.00,
  ecommercePrice: 12000.00,
  pagePrice: 450.00,
  prodPrice: 10.00,
  landingPagePrice: 1400.00
}

export default utils;