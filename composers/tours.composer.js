const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { tours } = require('../data/messages');
const { sendMsgAction } = require('../helpers/sendMsg');
const { defaultButtons } = require('../buttons/buttons');

// Эскурсии

composer.action('btn_category_4', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/tours/tours.jpg',
      },
      {
        caption: tours.main,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.url(
                'Oзнакомится со всеми вариантами экскурсий',
                'https://drive.google.com/drive/folders/13CkhHgiUd3cXjXzqyYYtc8WUnhVbZ2k_'
              ),
            ],
            [
              Markup.button.callback(
                'Хочу забронировать экскурсию',
                'category4_btn1'
              ),
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('category4_btn1', async (ctx) => {
  try {
    if (!ctx.session) {
      await ctx.reply(
        `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
      );
      return;
    }
    await ctx.reply(tours.msg);

    await ctx.telegram.sendMessage(
      435226457,
      `У гость ${ctx.session.name} из ${ctx.session.room} хочет забронировать экскурсию, свяжитесь с ним, как можно скорее`
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
