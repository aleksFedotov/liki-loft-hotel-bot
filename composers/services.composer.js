const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { services } = require('../data/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { orderButtons } = require('../buttons/buttons');

// Интересные места

composer.action('btn_category_5', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      services.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Махровый халат', 'category5_btn1')],
        [Markup.button.callback('Завтрак', 'category5_btn2')],
        [Markup.button.callback('Косметический набор', 'category5_btn3')],
        [Markup.button.callback('Зубной набор', 'category5_btn4')],
        [Markup.button.callback('Бритвенный набор', 'category5_btn5')],
        [Markup.button.callback('Детская кроватка', 'category5_btn6')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

sendMsgAction(
  'category5_btn1',
  false,
  //   'assets/images/services/service_1.jpg',
  services.service_1,
  composer,
  orderButtons(1)
);
sendMsgAction(
  'category5_btn2',
  false,
  //   'assets/images/services/service_2.jpg',
  services.service_2,
  composer,
  orderButtons(2)
);
sendMsgAction(
  'category5_btn3',
  false,
  //   'assets/images/services/service_5.jpg',
  services.service_3,
  composer,
  orderButtons(3)
);
sendMsgAction(
  'category5_btn4',
  false,
  //   'assets/images/services/service_4.jpg',
  services.service_4,
  composer,
  orderButtons(4)
);
sendMsgAction(
  'category5_btn5',
  false,
  //   'assets/images/services/service_5.jpg',
  services.service_5,
  composer,
  orderButtons(5)
);
sendMsgAction(
  'category5_btn6',
  false,
  //   'assets/images/services/service_6.jpg',
  services.service_6,
  composer,
  orderButtons(6)
);

module.exports = composer;
