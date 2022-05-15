const { Markup } = require('telegraf');

const defaultButtons = [
  [Markup.button.callback('Понятно, спасибо', 'thank_btn')],
  [Markup.button.callback('Спасибо, верните в меню!', 'menu_btn')],
  [Markup.button.callback('Хочу задать вопрос', 'question_btn')],
];

const docsButtons = [
  [Markup.button.callback('Понятно, спасибо', 'thank_btn')],
  [Markup.button.callback('Спасибо, верните в меню!', 'menu_btn')],
  [Markup.button.callback('Заказать документы', 'docs_btn')],
];

const orderButtons = (itemid) => {
  return [
    [Markup.button.callback('Понятно, спасибо', 'thank_btn')],
    [Markup.button.callback('Спасибо, верните в меню!', 'menu_btn')],
    [Markup.button.callback('Сделать заказ', `order_btn ${itemid}`)],
  ];
};

// const orderButtons = [
//   [Markup.button.callback('Понятно, спасибо', 'thank_btn')],
//   [Markup.button.callback('Спасибо, верните в меню!', 'menu_btn')],
//   [Markup.button.callback('Сделать заказ', 'order_btn')],
// ];

module.exports.defaultButtons = defaultButtons;
module.exports.docsButtons = docsButtons;
module.exports.orderButtons = orderButtons;
