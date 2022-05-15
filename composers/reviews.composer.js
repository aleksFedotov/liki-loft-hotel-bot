const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { reviews } = require('../messages/messages');

// Отзывы

composer.action('btn_category_11', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
      {
        source: 'assets/images/reviews/reviews.png',
      },
      {
        caption: reviews,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.url(
                'Tripadvisor',
                'https://www.tripadvisor.ru/Hotel_Review-g298507-d11880023-Reviews-Liki_Loft_Hotel-St_Petersburg_Northwestern_District.html'
              ),
            ],
            [
              Markup.button.url(
                'Яндекс',
                'https://yandex.ru/maps/org/liki_loft_hotel/1744975484/reviews/?ll=30.354450%2C59.943860&z=15'
              ),
            ],
            [
              Markup.button.url(
                'Google',
                'https://www.google.com/travel/hotels/liki%20loft%20hotel%20%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B/entity/CgsIx_bDkci0koGNARAB/reviews?q=liki%20loft%20hotel%20%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4757164%2C4758493%2C4762561%2C4771572%2C4778402%2C4779394&hl=ru-RU&gl=ru&ssta=1&rp=EMf2w5HItJKBjQEQx_bDkci0koGNATgCQABIAcABAg&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwiIwoe3wdz3AhUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAEaSQorEicyJTB4NDY5NjMxOWUzMzViNWE2YjoweDhkMDI0OWE0ODIzMGZiNDcaABIaEhQKBwjmDxAFGA4SBwjmDxAFGA8YATICEAAqCQoFOgNSVUIaAA'
              ),
            ],
            [Markup.button.callback('Понятно, спасибо', 'thank_btn')],
            [Markup.button.callback('Спасибо, верните в меню!', 'menu_btn')],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так, поробуйте снова');
  }
});

module.exports = composer;
