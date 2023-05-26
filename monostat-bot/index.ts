import * as dotenv from "dotenv";
import axios, { AxiosError } from "axios";
import { Context, Telegraf } from "telegraf";
import { Message } from "telegraf/typings/core/types/typegram";

import { currencyCodes } from "./data/currencyCodes";
import { mccs, mccObject } from "./data/mcc";
import { Configuration, OpenAIApi } from "openai";
import app from "./server";

dotenv.config();
const port = process.env.PORT_BOT_SERVER;
const configuration = new Configuration({
  organization: "org-bkDKsYOSe1TjnyFsMB0d68nu",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
interface Transaction {
  id: string;
  time: number;
  description: string;
  mcc: string;
  originalMcc: number;
  amount: number;
  operationAmount: number;
  currencyCode: number;
  commissionRate: number;
  cashbackAmount: number;
  balance: number;
  hold: boolean;
  receiptId: string;
}

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.telegram.setMyCommands([
  {
    command: "month_report",
    description: "Загальний звіт",
  },
  {
    command: "action_summarize",
    description: "Загальна сума витрат та доходів (Місяць)",
  },
  {
    command: "action_categorization",
    description: "Категоризація витрат (Місяць)",
  },
  {
    command: "action_tendention",
    description: "Аналіз тенденцій (Місяць)",
  },
  {
    command: "action_anomalies",
    description: "Пошук аномалій (Місяць)",
  },
  {
    command: "action_budgating",
    description: "Бюджетування та фінансове планування (Місяць)",
  },
]);
// Обработчик команды "/start"
bot.start(async (ctx: Context, next) => {
  const text: string = (ctx.message as Message.TextMessage).text;
  let refID: string | null = null;

  if (text.length > 6) {
    refID = text.slice(6, text.length);
  }

  await ctx.reply(`Ваш refID: ${refID ? refID : "Отсутсвует"}`);
});
bot.command("action_summarize", async (ctx: Context) => {
  await ctx.sendChatAction("typing");

  let prompt =
    "Виходячи з наступної виписки підби підсумки про суму доходів і суму витрат.\n\n";

  prompt += await monthReport();

  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .then(async (res: any) => {
      await ctx.reply(res.data.choices[0].message.content);
      await ctx.reply("[TODO] Конвертация валют");
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.command("action_tendention", async (ctx: Context) => {
  await ctx.sendChatAction("typing");
  let prompt =
    "Аналізуючи дані з виписки, вияви тенденції, тренди, та подібні метрики у моїх фінансових операціях .\n\n";

  prompt += await monthReport();

  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .then(async (res: any) => {
      await ctx.reply(res.data.choices[0].message.content);
      await ctx.reply(
        "[TODO] Проработать тренді И Тенденции, Добавить дополнительные метрики"
      );
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.command("action_anomalies", async (ctx: Context) => {
  await ctx.sendChatAction("typing");
  let prompt =
    "Аналізуючи дані з виписки, можна вияви будь-які аномалії чи незвичайні транзакції, які можуть вимагати моєї уваги.\n\n";

  prompt += await monthReport();

  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .then(async (res: any) => {
      await ctx.reply(res.data.choices[0].message.content);
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.command("month_report", async (ctx: Context) => {
  try {
    await ctx.sendChatAction("typing");
    let report = await monthReport();

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              report +
              "Уяви, що ти мій персональний фінансовий онлайн- консультант, якому требо щоденно інформувати мене щодо моїх витрат. напиши мені СМСку в дружньому тоні і опиши мою виписку. можеш дати якісь пораду щодо мого рахунку",
          },
        ],
      })
      .then(async (res: any) => {
        // console.log(res.data.choices[0].message.content);
        await ctx.reply(report);
        await ctx.reply(res.data.choices[0].message.content);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error: AxiosError | Error | any) {
    await ctx.reply(error.response.data.error.message);
  }
});
bot.command("profile", async (ctx: Context) => {
  // await
  await ctx.reply(await userInfo());
});

// Обработчик других типов сообщений
bot.on("message", async (ctx: Context) => {
  // Ответ на любое другое сообщение
  ctx.reply("Получено сообщение.");
});

bot.launch();

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

const monthReport = async (): Promise<any> => {
  try {
    let firstDay = new Date();
    let sum = 0;
    const dateF = Math.floor(
      new Date(firstDay.getTime() - 18 * 24 * 60 * 60 * 1000).getTime() / 1000
    );
    const dateT = Math.floor(new Date(firstDay).getTime() / 1000);
    const transactions = await axios.get(
      // cJyMwFlIsCUW8PAjHfNaLA
      // i54CaPkhdxcTw1USAgWrtQ
      `https://api.monobank.ua/personal/statement/i54CaPkhdxcTw1USAgWrtQ/${dateF.toString()}`,
      {
        headers: {
          "X-Token": process.env.BANK_TOKEN,
        },
        // params: {
        // account: "i54CaPkhdxcTw1USAgWrtQ",
        // from: dateF.toString(),
        // from: "1681660800",
        // },
      }
    );

    let responce = "Транзакції за місяць:\n\n";
    transactions.data.reverse().forEach((transaction: Transaction) => {
      sum += transaction.operationAmount;
      responce += `|${new Date(transaction.time * 1000)
        .toISOString()
        .replace("T", " ")
        .substring(0, 11)} | ${new Intl.NumberFormat("uk-UA", {
        style: "currency",
        currency: currencyCodes[transaction.currencyCode].code,
        currencyDisplay: "symbol",
      }).format(Number(transaction.operationAmount / 100))} | ${
        mccs[transaction.mcc].shortDescription
      } | ${transaction.description} |\n`;
    });
    console.log(transactions.data);
    return responce;
  } catch (error: unknown) {
    console.log("Error134");
    console.error(error);
  }
};

const userInfo = async (): Promise<any> => {
  try {
    let responce = "";
    const info = await axios.get(
      "https://api.monobank.ua/personal/client-info",
      {
        headers: {
          "X-Token": process.env.BANK_TOKEN,
        },
      }
    );
    responce = `Імʼя: *${info.data.name}*\nРахунки:`;
    info.data.accounts.forEach((account: any) => {
      responce += `ID: [${account.id}]\n`;
      responce += `Тип: [${account.type}]\n`;
      responce += `Баланс: [${new Intl.NumberFormat("uk-UA", {
        style: "currency",
        currency: currencyCodes[account.currencyCode].code,
        currencyDisplay: "symbol",
      }).format(Number(account.balance / 100))}]\n`;
      responce += `\n`;
    });
    // console.log(responce);
    return responce;
  } catch (error: Error | AxiosError | any) {
    console.error("Error", error.response.data.errorDescription);
    return error.response.data.errorDescription;
  }
};
