/**
 * Функция для отправки сообщения при нажатии по кнопке или выполнении команды
 * @param {String} id Идентификатор кнопки для обработки
 * @param {String} src Путь к изображению, или false чтобы отправить только текст
 * @param {String} text Текстовое сообщение для отправки
 * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */

function sendMsgAction(
  id,
  src,
  text,
  composer,
  keyboard = [[]],
  preview = false
) {
  composer.action(id, async (ctx) => {
    try {
      await ctx.answerCbQuery();
      if (src) {
        await ctx.replyWithPhoto(
          {
            source: src,
          },
          {
            caption: text,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({ inline_keyboard: keyboard }),
          }
        );
      } else {
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: !preview,
          reply_markup: JSON.stringify({ inline_keyboard: keyboard }),
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
}

module.exports.sendMsgAction = sendMsgAction;
