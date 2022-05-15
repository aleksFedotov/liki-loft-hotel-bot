const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { drinks } = require('../messages/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { defaultButtons } = require('../buttons/buttons');

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
        [Markup.button.callback('Горячие напитки', 'category7_btn1')],
        [Markup.button.callback('Холодные напитки', 'category7_btn2')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

sendMsgAction(
  'category7_btn1',
  'assets/images/places/place_1.jpg',
  places.place_1,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn7',
  'assets/images/places/place_2.jpg',
  places.place_7,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn3',
  'assets/images/places/place_3.jpg',
  places.place_3,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn4',
  'assets/images/places/place_4.jpg',
  places.place_4,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn5',
  'assets/images/places/place_5.jpg',
  places.place_5,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn6',
  'assets/images/places/place_6.jpg',
  places.place_6,
  composer,
  defaultButtons
);
sendMsgAction(
  'category7_btn7',
  'assets/images/places/place_7.jpg',
  places.place_7,
  composer,
  defaultButtons
);

module.exports = composer;
