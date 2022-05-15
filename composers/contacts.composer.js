const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { contacts } = require('../data/messages');
const { defaultButtons } = require('../buttons/buttons');

// Контакты отеля

composer.action('btn_category_10', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/contacts/contacts.jpg',
      },
      {
        caption: contacts,
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
