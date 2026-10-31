const { Telegraf } = require('telegraf');
const admin = require('firebase-admin');

// Firebase Initialization
const serviceAccount = require('./index.js');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Telegram Bot Setup
const bot = new Telegraf('9133397287:AAF6V... (আপনার আসল টেলিগ্রাম বট টোকেন এখানে থাকবে)');

bot.start((ctx) => {
  ctx.reply('স্বাগতম! আপনার বট সফলভাবে চালু হয়েছে।');
});

bot.on('text', (ctx) => {
  ctx.reply('আপনার বার্তাটি পাওয়া গেছে।');
});

bot.launch();
