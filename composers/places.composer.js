const { Composer } = require('telegraf');
const composer = new Composer();
const { messages } = require('../messages/messages');

// Интересные места

composer.help((ctx) => {
  try {
    ctx.reply(messages.help);
  } catch (error) {
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
