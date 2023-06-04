import * as dotenv from "dotenv";
import { Context, Telegraf } from "telegraf";
import { Message } from "telegraf/typings/core/types/typegram";
import { Worker } from "worker_threads";
import axios from "axios";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

const worker = new Worker("./workers/main.js", {
  workerData: { path: "server.ts" },
});
worker.on("exit", (code) => {
  if (code !== 0) new Error(`Worker stopped with exit code ${code}`);
});

bot.start(async (ctx: Context) => {
  const text: string = (ctx.message as Message.TextMessage).text;
  let code: number | null = null;

  if (text.length <= 6) {
    return;
  }

  code = Number(text.slice(6, text.length));

  try {
    const { status } = await axios.patch(`http://monostat-server:3000/auth`, {
      code,
    });

    if (status == 200) {
      console.log("2");
      await ctx.reply(
        `Якщо ви дійсно хочете продовжити процес автентифікації, будь ласка, натисніть кнопку 'Підтвердити'. У випадку, якщо ви не запитували автентифікацію або вважаєте, що виникла помилка, будь ласка, натисніть кнопку 'Скасувати'.\n\nКод доступу: [${code}]`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Скаусвати", callback_data: "auth_decline" },
                { text: "Підтвердити", callback_data: "auth_accept" },
              ],
            ],
          },
        }
      );
    }
  } catch (error) {
    if (error.response.status == 404) {
      await ctx.reply(`Термін дії коду доступу ${code} минув :(`);
      return;
    }
    console.log(error.response);
  }
});

bot.action("auth_decline", async (ctx: Context) => {
  await ctx.deleteMessage();
  await ctx.reply(`Запит відхилення за побажанням користувача.`);
});
bot.action("auth_accept", async (ctx: Context) => {
  await ctx.deleteMessage();
  await ctx.reply(`Доступ надано.`);
});

bot.on("message", async (ctx: Context) => {
  ctx.reply("Получено сообщение.");
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
