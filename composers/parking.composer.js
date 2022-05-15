const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { parking } = require('../messages/messages');
const { defaultButtons } = require('../buttons/buttons');

// Парковка

composer.action('btn_category_9', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/parking/parking.jpg',
      },
      {
        caption: parking,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: defaultButtons,
        },
      }
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
