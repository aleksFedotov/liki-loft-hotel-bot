const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { transfer } = require('../data/messages');
const { defaultButtons } = require('../buttons/buttons');

// Трансфер

composer.action('btn_category_8', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/transfer/transfer.jpg',
      },
      {
        caption: transfer,
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
