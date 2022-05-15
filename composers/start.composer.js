const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { start } = require('../data/messages');
const { rooms } = require('../data/rooms');

// Старт

composer.start(async (ctx) => {
  try {
    await ctx.reply(
      'Здравствуйте, давайте сначала познакомимся, чтобы мы точно знали из какого именно вы номера подключается к боту. Укажите, пожалуйста номер и свое имя, сообщение должно начинаться со слово номер. \n\nПример: номер 201 Данил'
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

const regex = new RegExp(/^номер/i);
composer.hears(regex, async (ctx) => {
  // Сохраняем данные гостя в сессии
  const { id, first_name, last_name } = ctx.message.from;
  const [_, guestRoom, guestName] = ctx.message.text.split(' ');

  if (!rooms.includes(guestRoom)) {
    ctx.reply(
      'К сожалению, такого номера в отеле нет. Пожалуйста попробуйте снова или свяжитесь с администратором через телефон в номере.'
    );
    return;
  }

  ctx.session = {
    name: guestName,
    room: guestRoom,
    id,
    first_name,
    last_name,
    order: { item: null, price: 0, qty: 0 },
  };

  try {
    await ctx.reply(
      `Здравствуйте, ${ctx.session.name} \ud83d\udc4b!\n\n${start}`,
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
        [Markup.button.callback('Хочу задать вопрос', 'question_btn')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
