import * as dotenv from "dotenv";
import { Context, Telegraf, Composer } from "telegraf";

const predicate = (u: Message): u is Message.CommonMessage => "entities" in u;
import { Message, MessageEntity } from "telegraf/typings/core/types/typegram";
import { message } from "telegraf/filters";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Обработчик команды "/start"
bot.start(async (ctx: Context, next) => {
  const text: string = (ctx.message as Message.TextMessage).text;
  let refID: string | null = null;

  if (text.length > 6) {
    refID = text.slice(6, text.length);
  }

  await ctx.reply(`Ваш refID: ${refID ? refID : "Отсутсвует"}`);
});

bot.command("profile", async (ctx: Context) => {
  ctx.reply("Профиль");
});

// Обработчик других типов сообщений
bot.on("message", async (ctx: Context) => {
  // Ответ на любое другое сообщение
  ctx.reply("Получено сообщение.");
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
