const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { servicesAndGoods } = require('../data/servicesAndGoods');
const fetch = require('node-fetch');

require('dotenv').config();

const channel = process.env.CHANNELS_USERNAME;

// Оброботка заказа нахождение товара или услуги в БД, запрос кол-ва товара или услуг у гостя

composer.action(/^order_btn/, async (ctx) => {
  try {
    if (!ctx.session) {
      await ctx.reply(
        `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: Номер 201 Данил`
      );
      return;
    }
    // обнуляем заказ в сесиии
    ctx.session.order = { item: null, qty: 0, price: 0 };
    // Получение id товара из query
    const itemId = ctx.match.input.split(' ')[1];
    // Получение сохранение id товара или услуг в сессии
    ctx.session.order.item = itemId;
    await ctx.reply(
      `${ctx.session.name}, выбирете кол-во товара или услуги, которое Вы хотите приобрести`,
      servicesAndGoods[itemId].item === 'Детская кроватка'
        ? Markup.inlineKeyboard([[Markup.button.callback('1', 'qty 1')]])
        : Markup.inlineKeyboard([
            [Markup.button.callback('1', 'qty 1')],
            [Markup.button.callback('2', 'qty 2')],
            [Markup.button.callback('3', 'qty 3')],
            [Markup.button.callback('4', 'qty 4')],
          ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

// Оброботка кол-ва товара или услуг и запрос

composer.action(/^qty/, async (ctx) => {
  try {
    if (!ctx.session) {
      await ctx.reply(
        `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
      );
      return;
    }

    // Загрузка Id товара  или услуг из сессии
    const itemId = ctx.session.order.item;
    // Получение кол-ва товара или услуг из query
    const qty = ctx.match.input.split(' ')[1];

    // Получение наименования товара или услуги из ДБ и подсчет итоговой стоимсоти
    const itemName = servicesAndGoods[itemId].item;
    const totalPrice = servicesAndGoods[itemId].price * +qty;
    console.log(totalPrice);

    // Сохранение итоговой стоимости и кол-ва в сессии
    ctx.session.order.price = totalPrice;
    ctx.session.order.qty = qty;

    await ctx.reply(
      `Ваш заказ:\n\n${itemName} ${qty} шт.\n\nИтоговая стоимость: ${totalPrice} рублей.\n\nВы потдверждаете заказ?`,
      Markup.inlineKeyboard([
        [Markup.button.callback('Да', 'confirm')],
        [Markup.button.callback('Нет', 'decline')],
      ])
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('confirm', async (ctx) => {
  if (!ctx.session) {
    await ctx.reply(
      `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
    );
    return;
  }
  const { item, price, qty } = ctx.session.order;
  const itemName = servicesAndGoods[item].item;

  try {
    await ctx.replyWithPhoto(
      { source: 'assets/images/qr/qrcode.jpeg' },
      {
        caption:
          'Пожалуйста, оплатите Ваш заказ при помощи этого QR кода и отправьте скрин чека об оплате в чат c подписью "чек". После получения подтверждения оплаты, администратор начнет готовить Ваш заказ.',
      }
    );
    await ctx.telegram.sendMessage(
      channel,
      `Гость ${ctx.session.name} из ${ctx.session.room} хочет приобрести ${itemName} в кол-ве ${qty}\n\nНа общую сумму ${price} рублей.\n\nДождитесь подтверждения оплаты и после доставте заказ в номер.`
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

composer.action('decline', async (ctx) => {
  if (!ctx.session) {
    await ctx.reply(
      `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
    );
    return;
  }
  // обнуляем заказ в сесиии
  ctx.session.order = { item: null, qty: 0, price: 0 };
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

composer.on('photo', async (ctx) => {
  if (!ctx.session) {
    await ctx.reply(
      `Извините время сессии истекло, пожалуйста введите номер комнаты и ваше имя сноваn\n\nПример: номер 201 Данил`
    );
    return;
  }
  if (
    !ctx.update.message.caption ||
    !ctx.update.message.caption.toLowerCase().includes('чек')
  ) {
    await ctx.reply(
      `Спасибо за фото!\nНо если Вы пытаетесь отправить чек, не забудьте отправить его с подписью "чек" под фото.`
    );
    return;
  }
  const { item, price, qty } = ctx.session.order;
  const itemName = servicesAndGoods[item].item;

  // загрузка и отправка отправленого чека

  const photo = ctx.update.message.photo[1].file_id;

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getfile?file_id=${photo}`
  );
  const resData = await res.json();
  const path = resData.result.file_path;

  await ctx.reply(
    'Спасибо за чек! Сейчас администротр проверяте статус оплаты и если все в порядке он доставит Вам Ваш заказ!'
  );
  await ctx.telegram.sendPhoto(
    channel,
    {
      url: `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${path}`,
    },
    {
      caption: `Чек гостя ${ctx.session.name} из ${ctx.session.room}\n\nНа оплату ${itemName} в кол-ве ${qty}\n\nНа общую стоимость ${price} рублей.\n\nПроверьте чек и если все правильно принесите заказ гостю, если нет свяжитесь с гостем.`,
    }
  );
});

module.exports = composer;
