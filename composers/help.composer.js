const { Composer } = require('telegraf');
const composer = new Composer();
const { help } = require('../data/messages');

// Help

composer.help((ctx) => {
  try {
    ctx.reply(help);
  } catch (error) {
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
