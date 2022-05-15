const { Composer, Markup } = require('telegraf');
const composer = new Composer();

// Интересные места

composer.action('menu_btn', async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/main/main.jpg',
      },
      {
        caption: `Главное меню`,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
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
            [
              Markup.button.callback(
                'Нужны отчетные документы',
                'btn_category_6'
              ),
            ],
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
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('thank_btn', async (ctx) => {
  try {
    await ctx.reply(`Всегда рад помочь! \ud83d\ude04`);
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('question_btn', async (ctx) => {
  try {
    if (!ctx.session) {
      await ctx.reply(
        `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
      );
      return;
    }
    await ctx.reply(
      `Администратор  свяжется с Вами в ближайшее время, пожалуйста подождите. \u23f3`
    );

    await ctx.telegram.sendMessage(
      435226457,
      `У гостя ${ctx.session.name} из ${ctx.session.room} номера есть вопрос, свяжитесь с ним, как можно скорее через telegram`
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('docs_btn', async (ctx) => {
  try {
    if (!ctx.session) {
      await ctx.reply(
        `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
      );
      return;
    }
    await ctx.reply(
      `Администратор  приступил к подготовке документов, Вы можете забрать настойке регистрации через некоторое время или при выезде из отеля`
    );

    await ctx.telegram.sendMessage(
      435226457,
      `Гостю ${ctx.session.name} из ${ctx.session.room} запросил отчетные документы, сделайте документы в ближайшее время`
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
