const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { restaurants } = require('../data/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { defaultButtons } = require('../buttons/buttons');

// Интересные места

composer.action('btn_category_3', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      restaurants.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Birch', 'category3_btn1')],
        [Markup.button.callback('Cake & Breakfast', 'category3_btn2')],
        [Markup.button.callback('Schengen', 'category3_btn3')],
        [Markup.button.callback('Meal', 'category3_btn4')],
        [Markup.button.callback('Duo', 'category3_btn5')],
        [Markup.button.callback('Mr. Bo', 'category3_btn6')],
        [Markup.button.callback('Пуд Хлеба', 'category3_btn7')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

sendMsgAction(
  'category3_btn1',
  'assets/images/restaurants/restaurant_1.jpg',
  restaurants.restaurant_1,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn2',
  'assets/images/restaurants/restaurant_2.jpg',
  restaurants.restaurant_2,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn3',
  'assets/images/restaurants/restaurant_3.jpg',
  restaurants.restaurant_3,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn4',
  'assets/images/restaurants/restaurant_4.jpg',
  restaurants.restaurant_4,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn5',
  'assets/images/restaurants/restaurant_5.jpg',
  restaurants.restaurant_5,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn6',
  'assets/images/restaurants/restaurant_6.jpg',
  restaurants.restaurant_6,
  composer,
  defaultButtons
);
sendMsgAction(
  'category3_btn7',
  'assets/images/restaurants/restaurant_7.jpg',
  restaurants.restaurant_7,
  composer,
  defaultButtons
);

module.exports = composer;
