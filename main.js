const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда стартa

bot.use(require('./composers/start.composer'));

// Команда help

bot.use(require('./composers/help.composer'));

// Информация

bot.use(require('./composers/info.composer'));

// Интересные места

bot.use(require('./composers/places.composer'));

// Популярные и вкусные кафе и рестораны:

bot.use(require('./composers/restaurants.composer'));

// Эскурсии

bot.use(require('./composers/tours.composer'));

// Дополнительные услуги
bot.use(require('./composers/services.composer'));

// Отчетные документы
bot.use(require('./composers/docs.composer'));

// Трансфер
bot.use(require('./composers/transfer.composer'));
// Парковка
bot.use(require('./composers/parking.composer'));

// Контакты
bot.use(require('./composers/contacts.composer'));

// Отзывы
bot.use(require('./composers/reviews.composer'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
