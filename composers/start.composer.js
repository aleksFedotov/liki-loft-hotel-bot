const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { start } = require('../messages/messages');

// Старт

composer.start(async (ctx) => {
  try {
    await ctx.reply(
      `Здравствуйте, ${ctx.message.from.first_name} \ud83d\udc4b!\n\n${start}`,
      Markup.inlineKeyboard([
        [Markup.button.callback('Информация по отелю', 'btn_category_1')],
        [
          Markup.button.callback(
            'Интересные места около отеля и в центре города',
            'btn_category_2'
          ),
        ],
        [
          Markup.button.callback(
            'Популярные и вкусные кафе и рестораны',
            'btn_category_3'
          ),
        ],
        [Markup.button.callback('Экскурсии', 'btn_category_4')],
        [
          Markup.button.callback(
            'Дополнительные услуги в номер',
            'btn_category_5'
          ),
        ],
        [Markup.button.callback('Нужны отчетные документы', 'btn_category_6')],
        [
          Markup.button.callback(
            'Горячие и прохладительные напитки',
            'btn_category_7'
          ),
        ],
        [Markup.button.callback('Трансфер', 'btn_category_8')],
        [Markup.button.callback('Парковка', 'btn_category_9')],
        [Markup.button.callback('Контакты отеля', 'btn_category_10')],
        [Markup.button.callback('Отзывы', 'btn_category_11')],
        [Markup.button.callback('Хочу задать вопрос', 'btn_category_12')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
