const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { drinks } = require('../data/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { orderButtons } = require('../buttons/buttons');

// Интересные места

composer.action('btn_category_7', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      drinks.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Горячие напитки', 'category7_btn1')],
        [Markup.button.callback('Холодные напитки', 'category7_btn2')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('category7_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      drinks.hot.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Американо', 'category7_btn1_1')],
        [Markup.button.callback('Эспрессо', 'category7_btn1_2')],
        [Markup.button.callback('Латте', 'category7_btn1_3')],
        [Markup.button.callback('Капучино', 'category7_btn1_4')],
        [Markup.button.callback('Кофе с молоком', 'category7_btn1_5')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});
composer.action('category7_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      drinks.cold.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Burn', 'category7_btn2_1')],
        [Markup.button.callback('Сок Rich', 'category7_btn2_2')],
        [Markup.button.callback('Швепс', 'category7_btn2_3')],
        [Markup.button.callback('Кока-кола', 'category7_btn2_4')],
        [
          Markup.button.callback(
            'Вода Bonaqua газированная',
            'category7_btn2_5'
          ),
        ],
        [
          Markup.button.callback(
            'Вода Bonaqua негазированная',
            'category7_btn2_6'
          ),
        ],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

sendMsgAction(
  'category7_btn1_1',
  false,
  drinks.hot.hot_1,
  composer,
  orderButtons(7)
);
sendMsgAction(
  'category7_btn1_2',
  false,
  drinks.hot.hot_2,
  composer,
  orderButtons(8)
);
sendMsgAction(
  'category7_btn1_3',
  false,
  drinks.hot.hot_3,
  composer,
  orderButtons(9)
);
sendMsgAction(
  'category7_btn1_4',
  false,
  drinks.hot.hot_4,
  composer,
  orderButtons(10)
);
sendMsgAction(
  'category7_btn1_5',
  false,
  drinks.hot.hot_5,
  composer,
  orderButtons(11)
);

sendMsgAction(
  'category7_btn2_1',
  false,
  drinks.cold.cold_1,
  composer,
  orderButtons(12)
);
sendMsgAction(
  'category7_btn2_2',
  false,
  drinks.cold.cold_2,
  composer,
  orderButtons(13)
);
sendMsgAction(
  'category7_btn2_3',
  false,
  drinks.cold.cold_3,
  composer,
  orderButtons(14)
);
sendMsgAction(
  'category7_btn2_4',
  false,
  drinks.cold.cold_4,
  composer,
  orderButtons(15)
);
sendMsgAction(
  'category7_btn2_5',
  false,
  drinks.cold.cold_5,
  composer,
  orderButtons(16)
);
sendMsgAction(
  'category7_btn2_6',
  false,
  drinks.cold.cold_6,
  composer,
  orderButtons(17)
);

module.exports = composer;
