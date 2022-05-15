const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { places } = require('../data/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { defaultButtons } = require('../buttons/buttons');

// Интересные места

composer.action('btn_category_2', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      places.main,
      Markup.inlineKeyboard([
        [Markup.button.callback('Церковь Анненкирхе', 'category2_btn1')],
        [Markup.button.callback('Академия Штиглица', 'category2_btn2')],
        [Markup.button.callback('Мозаичный дворик', 'category2_btn3')],
        [
          Markup.button.callback(
            'Открытая красивая парадная',
            'category2_btn4'
          ),
        ],
        [
          Markup.button.callback(
            'Оранжерея Таврического сада',
            'category2_btn5'
          ),
        ],
        [
          Markup.button.callback(
            'Музей Анны Ахматовой в Фонтанном Доме',
            'category2_btn6'
          ),
        ],
        [Markup.button.callback('Сад Дружбы', 'category2_btn7')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

sendMsgAction(
  'category2_btn1',
  'assets/images/places/place_1.jpg',
  places.place_1,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn2',
  'assets/images/places/place_2.jpg',
  places.place_2,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn3',
  'assets/images/places/place_3.jpg',
  places.place_3,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn4',
  'assets/images/places/place_4.jpg',
  places.place_4,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn5',
  'assets/images/places/place_5.jpg',
  places.place_5,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn6',
  'assets/images/places/place_6.jpg',
  places.place_6,
  composer,
  defaultButtons
);
sendMsgAction(
  'category2_btn7',
  'assets/images/places/place_7.jpg',
  places.place_7,
  composer,
  defaultButtons
);

module.exports = composer;
