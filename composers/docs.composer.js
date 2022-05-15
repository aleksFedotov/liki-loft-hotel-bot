const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { docs } = require('../data/messages');
const { docsButtons } = require('../buttons/buttons');

// Интересные места

composer.action('btn_category_6', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/docs/docs.jpg',
      },
      {
        caption: docs,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: docsButtons,
        },
      }
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
